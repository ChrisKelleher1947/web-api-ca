import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromMustWatch from "../components/cardIcons/removeFromMustWatch";

const MustWatchMoviesPage = () => {
    const { mustWatch: movieIds } = useContext(MoviesContext);
  // Check if movieIds exists and is an array; if not, default to an empty array.
  const mustWatchMovieQueries = useQueries(
    (movieIds || []).map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );

  // Check if any of the parallel queries is still loading.
  const isLoading = mustWatchMovieQueries.some((m) => m.isLoading);

  if (isLoading) {
    return <Spinner />;
  }

  // Filter out queries that didn’t return data successfully
  const movies = mustWatchMovieQueries
    .filter((q) => q.data)
    .map((q) => {
      // Ensure genres and genre_ids are defined
      const genreIds = q.data.genres ? q.data.genres.map((g) => g.id) : [];
      return { ...q.data, genre_ids: genreIds };
    });

  return (
    <PageTemplate
      title="Must Watch Movies"
      movies={movies}
      action={(movie) => (
        <RemoveFromMustWatch movie={movie} />
      )}
    />
  );
};

export default MustWatchMoviesPage;
