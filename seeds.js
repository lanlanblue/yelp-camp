var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {name: "Forest", image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", description: "Car Camping spots are 10’x30′.  Pile as many people in your spot as you can comfortably fit. Spots are good for the entire weekend THUR-MON. Once parked, your car stays in your spot for the entire weekend. No vehicle ins/outs. No saving spots. Arrive together to camp together.  One is car required and 1 car is maximum per spot. Once a vehicle vacates their spot, they are relinquishing their right to the camp site and any items remaining in the camp site will be considered trash and permanently disposed of."},
     {name: "Starry Night", image: "https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350", description: "Car Camping spots are 10’x30′.  Pile as many people in your spot as you can comfortably fit. Spots are good for the entire weekend THUR-MON. Once parked, your car stays in your spot for the entire weekend. No vehicle ins/outs. No saving spots. Arrive together to camp together.  One is car required and 1 car is maximum per spot. Once a vehicle vacates their spot, they are relinquishing their right to the camp site and any items remaining in the camp site will be considered trash and permanently disposed of."},
     {name: "Camping Cars", image: "https://images.pexels.com/photos/587976/pexels-photo-587976.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350", description: "Car Camping spots are 10’x30′.  Pile as many people in your spot as you can comfortably fit. Spots are good for the entire weekend THUR-MON. Once parked, your car stays in your spot for the entire weekend. No vehicle ins/outs. No saving spots. Arrive together to camp together.  One is car required and 1 car is maximum per spot. Once a vehicle vacates their spot, they are relinquishing their right to the camp site and any items remaining in the camp site will be considered trash and permanently disposed of."},
     {name: "Forest", image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", description: "Car Camping spots are 10’x30′.  Pile as many people in your spot as you can comfortably fit. Spots are good for the entire weekend THUR-MON. Once parked, your car stays in your spot for the entire weekend. No vehicle ins/outs. No saving spots. Arrive together to camp together.  One is car required and 1 car is maximum per spot. Once a vehicle vacates their spot, they are relinquishing their right to the camp site and any items remaining in the camp site will be considered trash and permanently disposed of."},
     {name: "Starry Night", image: "https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350", description: "beautiful!"},
     {name: "Camping Cars", image: "https://images.pexels.com/photos/587976/pexels-photo-587976.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350", description: "beautiful!"},
     {name: "Forest", image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", description: "beautiful!"},
     {name: "Starry Night", image: "https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350", description: "beautiful!"},
     {name: "Camping Cars", image: "https://images.pexels.com/photos/587976/pexels-photo-587976.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350", description: "beautiful!"}
];

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        // if(err){
        //     console.log("removed campgrounds!");
        // } else {
        //     //add a few campgrounds
        //     data.forEach(function(seed){
        //         Campground.create(seed, function(err, campground){
        //             if(err){
        //                 console.log(err);
        //             } else {
        //                 console.log("added a campground!");
        //                 //create a comment
        //                 Comment.create(
        //                     {
        //                         text: "This place is great, but I wish there was internet",
        //                         author: "Peggy"
        //                     }, function(err, comment) {
        //                         if(err){
        //                             console.log(err);
        //                         } else {
        //                             campground.comments.push(comment);
        //                             campground.save();
        //                             console.log("added a comment!");
        //                         }
        //                     }
        //                 );
        //                 // Comment.create(
        //                 //     {
        //                 //         text: "This place sucks, but I wish there was internet",
        //                 //         author: "Steve"
        //                 //     }, function(err, comment) {
        //                 //         if(err){
        //                 //             console.log(err);
        //                 //         } else {
        //                 //             campground.comments.push(comment);
        //                 //             campground.save();
        //                 //             console.log("added a comment!");
        //                 //         }
        //                 //     }
        //                 // );
        //             }
        //         });
        //     });        
        // }
        
    });
    
    
    
    //add a few campgrounds
}

module.exports = seedDB;