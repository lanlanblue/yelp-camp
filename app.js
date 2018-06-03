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



//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));



//CONNECT DATABASE
mongoose.connect("mongodb://localhost/campground_app");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
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


//RESTFUL ROUTES

//name         url                 verb         desc
//==============================================================================
//INDEX        /campgrounds        GET          Display a list of all campgrounds
//NEW          /campgrounds/new    GET          Displays a form to make a new campground
//CAREATE      /campgrounds        POST         Add new campground to DB
//SHOW         /campgrounds/:id    GET          Shows info about one campground

//NESTED ROUTES
//NEW          /campgrounds/:d/comments/new      GET
//CREATE       /campgrounds/:id/comments         POST