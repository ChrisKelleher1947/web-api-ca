# Assignment 2 - Web API.

Name: Chris Kelleher

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + Added Movie Recommendations API Call 
 + Added Movie Discover API Call  
 + Added Movie Upcoming API Call  
 + Added Movie images API Call
 + Added Movie reviews API Call
 + Added Movie Paramaterised API Call
 + Integrated Discover and Upcoming, Attempted integration of the rest
 + Addes a sign up and login page, also has protected routes for whole application
 + Added Popular Movies API Call

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` file and what variables to put in it. Give an example of how this might be done.

REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

______________________
NODEENV=development
PORT=8080
HOST=LocalHost
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies | GET | Gets a list of movies 
- /api/movies/{movieid} | GET | Gets a single movie 
- /api/movies/{movieid}/reviews | GET | Get all reviews for movie 
- /api/movies/{movieid}/reviews | POST | Create a new review for Movie 
- /api/movies/upcoming
- /api/movies/popular
- /api/movies/{movieid}/images
- /api/movies/{movieid}/recommendations

.

## Security and Authentication

Authentication and security the same as the labs. Must sign up or login to view anything else about the website. All other routes are protected. Once the app is reloaded you must login again.

## Integrating with React App

I used the labs as a basis for integrating with the react app. Each one calls from TMDB. Then does a router.get to establish it for an API call. The the react app calls on the api and it displays as it did previoulsy with the React app. The Home/Discover page, upcoming and popular pages all use this.

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app.   
