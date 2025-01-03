# Assignment 1 - ReactJS app.

Name: [Chris Kelleher (20101947)]

## Overview.

This repository contains a ReactJS application for movie enthusiasts, allowing users to explore movies, manage favorites, write reviews, and discover upcoming films. It integrates Firebase for authentication and uses the TMDB API for movie data.

### Features.
 
+ User Authentication: Firebase authentication for login
+ Must Watch List: Track movies you plan to watch using a "Must Watch" list, based on upcoming movies
+ Upcoming Movies: Browse a list of upcoming movies
+ Recommended Movies: View personalized recommendations based on a selected movie
+ Protected Routes: Restrict access to certain pages unless logged in
+ New Filtering Options: Filter movies based on their average vote rating, release year and original langauge
+ Cast: View the cast of a selected movie, with their character name, actor name and profile picture
+ Top Rated Movies: View the movies with the highest ratings on TMDB
+ Popular Movies: View the current most popular movies based on TMDB
+ Production Countries Tag: Previoulsy a visual error now displaying correctly

## Setup requirements.

A google account is required to login to the app and view the functionality.

## API endpoints.

+ List of movies set to release soon: /movie/upcoming
+ List of popular movies: /movie/popular
+ List of top rated movies: /movie/topRated
+ List of movie recommendations: /movie/:id/recommendations
+ List of movie cast members (credits): /movie:id/cast 

## Routing.

+ Public Routes:
+ /login - Login page

+ Authenticated Routes:
+ / - Home page displaying movies
+ /movies/favorites - Displays the user's favorite movies
+ /movies/:id - Displays details of a selected movie
+ /reviews/form - Allows users to add a review for a movie
+ /reviews/:id - Displays a specific movie review
+ /movies/upcoming - Displays a list of upcoming movies
+ /movies/mustWatch - Displays the selected must watch movies
+ /movies/popular - Displays a list of popular movies
+ /movies/topRated - Displays a list of the highest rates movies
+ /movies/:id/cast - Displays the cast for a selected movie

## Independent learning (If relevant).

+ Firebase Authentication: Integrated Firebase for user authentication.
+ Code references: src/index.js
+ Resource: Firebase Authentication Documentation, https://medium.com/@ogun.ergin35/authenticate-your-react-app-with-firebase-a-step-by-step-guide-c240d9d7e7b7#:~:text=Click%20the%20%E2%80%9CCreate%20a%20project,app%20in%20your%20React%20project.
