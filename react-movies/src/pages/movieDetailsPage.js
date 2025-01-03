import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getMovieRecommendations } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import MovieList from "../components/movieList";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites"; 

const MoviePage = () => {
  const { id } = useParams();
  
  // Fetch main movie details
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );
  
  // Fetch recommended movies
  const { data: recommendations, error: recError, isLoading: recLoading, isError: recIsError,} = useQuery(
    ["recommendations", { id: id }], 
    getMovieRecommendations
  );

  if (isLoading || recLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  if (recIsError) {
    return <h1>{recError.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
          </PageTemplate>
          <h2>Recommended Movies</h2>
          <MovieList 
            movies={recommendations.results} 
            action={(movie) => {
              return <AddToFavoritesIcon movie={movie} />
            }} 
          />
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;
