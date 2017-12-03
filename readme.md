#YelpCamp

* Add landing Page
* Add Campgrounds Page that lists all campgrounds

##Each Campground has:
* Name
* Image

#Layout and Basic Styling
* Create header and footer partials
* Add in Bootstrap

#Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

#Style the Campgrounds Page
* Add a better header /title
* Make campgrounds display in a grid

#Style the Navbar and Form
* Add navbar to all templates
* Style the new campground form

#Our First Mongo Commands
* mongod - starts demon/process
* mongo - opens Mongo shell
* help - lists basic Mongo features
* show dbs - shows current databases
* use - creates new database, if it exists it will use its
* insert - adds to database
* find - view all items in database
* update - makes corrections to items in db; $set keeps the data from being overridden
* remove - removes/destroys  item fromn db; .limit(#) removes amount specified

acronym: CRUD(create, read, update, destroy)

#Databases

##Intro to Databases
* What is a database?
    * A collection of information/database
    * Has an interface
* SQL(relational) vs NoSQL(non-relational)

#Intro to mongoDB
* What is MongoDB?
* Why are we using it? 
* Let's install it!

#Mongoose
* What is Mongoose?
* Why are we using it?
* Interact with a Mongo Database using Mongoose

#Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes!

#Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

#Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly

#Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

#Add the Comment model
* Make our errors go away
* Display comments on campground Show page

#Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

RESTFUL ROUTES

name    url                 verb            desc.
=======================================================
INDEX   /campgrounds        GET     Display all campgrounds
NEW     /campgrounds/new    GET     Display form to create new campground    
CREATE  /campgrounds        POST    Add new campground to DB
SHOW    /campgrounds/:id    GET     Shows info for one campground

NESTED ROUTES

name    url                             verb
=======================================================
NEW     campgrounds/:id/comments/new    GET
CREATE  campgrounds/:id/comments        POST


#Style Show Page
* Add sidebar to show page
* Display comments nicely

#Finish Styling Show Page
* Add public directory
* Add custom stylesheet

#Auth Pt. 1 -  User model
* Install all packages needed for auth
* Define user model

#Auth Pt. 2 - Register
* Configure Passport
* Add register routes
* Add register template

#Auth Pt. 3 - Login
* Add login routes
* Add login template

#Auth Pt. 4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar
* Show/hide auth links correctly

#Auth Pt. 5 - Show/Hide links
* Show/hide auth links in navbar correctly

#Refactor the routes
* Use express router to reorganize all routes

#Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

#Users + Campgrounds
* Prevent unathenticated user from creating a campground
* Save username+id name to newly created campground

#Deleting Campgrounds
* Add Destroy Route
* Add delete button

#Editing Campgrounds
* Add Method Override
* Add Edit Route for Campgrounds
* Add Link to Edit Page
* Add Update Route
* Fix $set Problem

#Authorization
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons

#Editing Comments
* Add edit route for comments
* Add edit button
* Add Update route

# Deleting Comments
* Add Destroy route
* Add Delete button

Campground Destroy Route: /campgrounds/:id
Comment Destroy Route: /campgrounds/:id/comment/:comment_id

#Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware

#Adding in Flash
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header
