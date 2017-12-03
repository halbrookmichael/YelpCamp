//all middleware goes here
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next){
 if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
            if(err || !foundCampground){
            req.flash("error", "Campground not found or doesn't exist");
            res.redirect("back");
        } else {
            //does the user own the content?
            if(foundCampground.author.id.equals(req.user._id)){ //Can't use == or ===
                next();
            } else {
                //if user doesn't own content
                res.redirect("back");
            }
          }
        });
    } else {
        res.redirect("back");
    }
};

middlewareObj.checkCommentOwnership = function(req, res, next){
 //Is the user logged in
 if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err || !foundComment){
                req.flash("error", "Comment not found");
                res.redirect("back");
        } else {
            //does the user own the content?
            if(foundComment.author.id.equals(req.user._id)){ //Can't use == or ===
                //if yes
                next();
            } else {
                req.flash("error", "This doesn't belong to you");
                //if user doesn't own content
                res.redirect("back");
            }
          }
        });
    } else {
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
};

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that");
    res.redirect("/login");
};

module.exports = middlewareObj;