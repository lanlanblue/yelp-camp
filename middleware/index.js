//all the middle ware goes here
var   Comment          = require("../models/comment"),
      Campground       = require("../models/campground");

var middlewareObj = {};

middlewareObj.isLoggedIn = function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "Please login first!");
    res.redirect("/login");
}

middlewareObj.checkCampgroundOwnership = function checkCampgroundOwnership(req, res, next){
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
           if(err){
               req.flash("error", "Campground not found");
               res.redirect("back");
           } else{
               //does user own the campgrounds?
               if(foundCampground.author.id.equals(req.user._id)) {//can't write foundCampgorund.author.id === req.user._id since one is mongodb obj one is str type!
                   return next();
               } else {
                   req.flash("error", "You don't have permission to do that");
                   res.redirect("back");
               }
           }
        });
    } else {
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back"); //back to last page
    }
}

middlewareObj.checkCommentOwnership = function checkCommentOwnership(req, res, next){
    if(req.isAuthenticated()){
        console.log("Test");
        Comment.findById(req.params.comment_id, function(err, foundComment){
           if(err){
               req.flash("error", err);
               res.redirect("back");
           } else{
               //does user own the campgrounds?
               if(foundComment.author.id.equals(req.user._id)) {//can't write foundCampgorund.author.id === req.user._id since one is mongodb obj one is str type!
                   return next();
               } else {
                   res.redirect("back");
               }
           }
        });
    } else {
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back"); //back to last page
    }
}

module.exports = middlewareObj;