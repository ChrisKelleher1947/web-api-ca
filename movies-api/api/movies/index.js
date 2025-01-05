import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import {
    getUpcomingMovies
  } from '../tmdb-api';

  import {
    getMovieGenres
  } from '../tmdb-api';

  import {
    getMovies
  } from '../tmdb-api';

  import {
    getMovieReviews
  } from '../tmdb-api';

  import{
    getMovie
  } from '../tmdb-api';

  import{
    getMovieRecommendations
  } from '../tmdb-api'; 

  import{
    getPopularMovies
  } from '../tmdb-api'; 

  import { getMovieImages } from '../tmdb-api';
  

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    const [total_results, results] = await Promise.all([
        movieModel.estimatedDocumentCount(),
        movieModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));

router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/tmdb/genres', asyncHandler(async (req, res) => {
    const movieGenres = await getMovieGenres();
    res.status(200).json(movieGenres);
}));

router.get('/tmdb/movies', asyncHandler(async (req, res) => {
    const movies = await getMovies();
    res.status(200).json(movies);
}));

router.get('/tmdb/movies/:id', asyncHandler(async (req, res) => {
    const { id } = req.params; // Correctly extract the movie ID from the URL
    try {
      const movie = await getMovie(id); // Fetch movie data using the ID
      res.status(200).json(movie); // Send back the movie data as JSON
    } catch (error) {
      console.error(`Error fetching movie ${id}:`, error.message);
      res.status(500).json({ message: error.message }); // Handle errors
    }
  }));
  

  router.get('/tmdb/movies/:id/recommendations', asyncHandler(async (req, res) => {
    try {
        const { id } = useParams();
        const recommendations = await getMovieRecommendations(id);
        res.status(200).json(recommendations);
    } catch (error) {
        console.error(`Error fetching recommendations for movie ${id}:`, error.message);
        res.status(500).json({ message: error.message });
    }
}));
  

// Get movie reviews by movie ID
router.get('/tmdb/movies/:id/reviews', asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const reviews = await getMovieReviews(id);
        res.status(200).json(reviews);
    } catch (error) {
        console.error(`Error fetching reviews for movie ${id}:`, error.message);
        res.status(500).json({ message: error.message });
    }
}));

router.get('/tmdb/movies/:id/images', asyncHandler(async (req, res) => {
    try {
        const { id } = req.params; // Extract the 'id' from the request params
        const images = await getMovieImages(id); // Pass the 'id' to the function
        res.status(200).json(images); // Respond with the images
    } catch (error) {
        console.error(`Error fetching images for movie ${req.params.id}:`, error.message);
        res.status(500).json({ message: `Hey!! You caught the error 👍👍. Here's the details: ${error.message}` });
    }
}));


router.get('/tmdb/popular', asyncHandler(async (req, res) => {
    const popularMovies = await getPopularMovies();
    res.status(200).json(popularMovies);
}));


export default router;
