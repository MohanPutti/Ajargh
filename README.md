Ajargh Backend Assignment

Main Objectives
Implementation of JWT authentication with role-based access
Role-based authorisation - CRUD operations for listings and reviews

Prerequisites
Node
Npm
Mysql

How to Setup & Run?

1. Clone this repo
2. Do npm install
3. Create mysql user with username as ajargh and password ajargh123$ and give necessary permission to user ajargh 
   mysql -u root -p
   CREATE USER 'ajargh'@'localhost' IDENTIFIED BY 'ajargh123$';
   GRANT ALL PRIVILEGES ON *.* TO 'ajargh'@'localhost' WITH GRANT OPTION;
   FLUSH PRIVILEGES;
5. Create mysql database with database name ajargh 
   CREATE DATABASE ajargh;
6. Create default tables Listings, Reviews, Users andReplies
  CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('Business Owner', 'User', 'Admin') DEFAULT 'User'
);
CREATE TABLE Listings (
    listing_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    city VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
CREATE TABLE Reviews (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    listing_id INT,
    user_id INT,
    text TEXT,
    rating INT,
    FOREIGN KEY (listing_id) REFERENCES Listings(listing_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
CREATE TABLE Replies (
    reply_id INT AUTO_INCREMENT PRIMARY KEY,
    review_id INT NOT NULL,
    user_id INT NOT NULL,
    text TEXT NOT NULL,
    FOREIGN KEY (review_id) REFERENCES Reviews(review_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

7. Start the application 
    nodemon src/service.js

create users with roles to run and check endpoints

Hosted on ip: 65.1.13.64

EndPoints to Test
To check login user authentication
default users created -
- mohan pw: mohan123$ role: Admin
- ashok pw: ashok123$ role: User
- harish pw: harish123$ role: Business Owner

End Point - http://65.1.13.64:6001/user/login returns jwt token which can be passed as Bearer token to all other endpoints

Listing endpoints
GET /listing/ -to list all listings
GET /listing/:listingId - to list a listing by id
POST /listing/ - to create a listing
DEL /listing/:listingId -to delete a listing by id
PUT /listing/:listingId - to update a listing

Review EndPoints
GET /review/ -to list all reviews
GET /review/:reviewId - to list a review by id
POST /review/ - to create a review
DEL /review/:reviewId -to delete a review by id
PUT /review/:reviewId - to update a review
POST /review/reply - to add a reply to review
GET /review/average - to get average rating of a listing




  




