# Yelp Camp
A webpage for sharing posts and comments about campgrounds. Users can create/update/delete their posts and have comments on every post.
![demo1.png](https://github.com/lanlanblue/yelp-camp/blob/master/demo1.png)

## Features
- Authentication
  - Login/Logout
  - Edit/Delete permission
- CRUD operations
  - Posts creation/removal
  - Comments creation/removal
- RESTful API

## Developer tools
- Node.js
- Express
- MongoDB
- Middleware
  - passport
    - Authentication
  - Mongoose
    - An ODM (Object Document Mapper) allows you to define objects with a strongly-typed schema that is mapped to a MongoDB document.
  - body-parser
    - Parse incoming request bodies to objects
  - method-override:
    - Override request type since client may not support some requests. ex. override POST request to PUT request
  - flash
    - Flash messages
## Routes

Route                          | Method | Desc 
---------- | ------ | ---- 
/register                     | GET    | Display a form to sign up|
/register                     | POST   | Add a new user to database|
 |/login                        | GET    | Display a form to login
/login                        | POST   | Redirect to /campgrounds if login successfully, otherwise, redirect to /login for trying again
/campgrounds                  | GET    | Display a list of all campgrounds
/campgrounds                  | POST   | Add a new campground to database
/campgrounds/new              | GET    | Display a form to make a new campground
/campgrounds/:id              | GET    | Show info of one campground
/campgrounds/:id              | PUT    | Update infomation of a campground
/campgrounds/:id         | DELETE    | Delete a campground from database
/campgrounds/:id/edit         | GET    | Show edit page of a campground
/campground/:id/comments      | POST   | Add a new comment to database
/campgrounds/:id/comments/new | GET    | Display a form to make a new comments
/campground/:id/comments/:comments_id     | PUT   | Update a comment
/campground/:id/comments/:comments_id     | DELETE   | Delete a comment
/campground/:id/comments/:comments_id/edit     | GET   | Show edit page of a comment

## MongoDB Schema
- user

Field     | Type             | Ref
----------|------------------|----------
username             | String    | |
password            | String    | |
- comment

Field     | Type             | Ref
----------|------------------|----------
text             | String    | |
author            | String    | user |
- campground

Field     | Type             | Ref
----------|------------------|----------
name             | String    | |
price            | String    | |
image            | String    | |
description      | String    | |
author           | String    | user
comments         | String    | comment |

## Deployment Platform
- Application: Heroku
- Mongodb: mLab
