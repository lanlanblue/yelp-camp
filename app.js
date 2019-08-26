var express          = require("express"),
    app              = express(),
    bodyParser       = require("body-parser"),
    mongoose         = require("mongoose"),
    flash            = require("connect-flash"),
    passport         = require("passport"),
    LocalStrategy    = require("passport-local"),
    methodOverride   = require("method-override"),
    Comment          = require("./models/comment"),
    Campground       = require("./models/campground"),
    User             = require("./models/user"),
    seedDB           = require("./seeds");

//requiring routes
var commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes       = require("./routes/index");

//CONNECT DATABASE
var url = process.env.DATABASEURL || "mongodb://localhost/campground_app"
mongoose.connect(url)
//mongoose.connect("mongodb://localhost/campground_app");
//mongoose.connect("mongodb://<dbuser>:<dbpassword>@ds245210.mlab.com:45210/campground");
//mongoose.connect(process.env.DATABASEURL);

//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Your secret key!",
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.urlencoded({egxtended: true}));//declare middleware
app.set("view engine", "ejs"); //based on views/*ejs
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
//seed the database
//seedDB();

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//add currentUser for each route
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error"); //tell every "message" is from flash
    res.locals.success = req.flash("success"); 
    next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Camp Yelp start ...");
});

