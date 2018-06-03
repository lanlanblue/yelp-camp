var express = require("express");
var router = express.Router({mergeParams: true}); // for req.params.id
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middleware = require("../middleware"); //will load "index.js" automatically

//=========================
// COMMENTS ROUTES
//=========================
router.get("/new", middleware.isLoggedIn, function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err) {
            console.log(err);  
        } else {
             res.render("comments/new", {campground: foundCampground});
        }
    });
});

router.post("/", middleware.isLoggedIn, function(req, res){
    //var authorName = req.body.author;
    //var commentText = req.body.text;
    //var obj = {text: commentText, author: authorName};
    
    Comment.create(
        req.body.comment,
        function(err, comment) {
            Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
                if(err) {
                    console.log(err);
                    req.flash("error", "no campground found");
                    res.redirect("/campgrounds");
                } else {
                    //add username and id to comment
                    comment.author.id = req.user._id; //req.user from middleware isLoggin
                    comment.author.username = req.user.username;
                    //save comment
                    comment.save();
                    
                    foundCampground.comments.push(comment);
                    foundCampground.save();
                    req.flash("success", "Successfully added comment");
                    res.redirect("/campgrounds/" + foundCampground._id);
                }
            });
        }
    );
});

// COMMENT EDIT
router.get("/:comment_id/edit", middleware.checkCommentOwnership, function(req, res){
   Comment.findById(req.params.comment_id, function(err, foundComment){
       if(err){
           res.rendirect("back");
       } else {
           res.render("comments/edit", {campground_id: req.params.id, comment: foundComment}); 
       }
   });
   
});

// COMMENT UPDATE
router.put("/:comment_id", middleware.checkCommentOwnership, function(req, res){
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
       if(err) {
           res.redirect("back");
       } else {
           res.redirect("/campgrounds/" + req.params.id);
       }
    });
});

// COMMENT DESTROY ROUTE
router.delete("/:comment_id", middleware.checkCommentOwnership, function(req, res){
   Comment.findByIdAndRemove(req.params.comment_id, function(err){
      if(err){
          res.redirect("back");
      } else {
          res.redirect("/campgrounds/" + req.params.id);
      }
   });
});




module.exports = router;