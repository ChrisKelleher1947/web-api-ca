import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";

function MovieListPageTemplate({ movies, title, action }) {
  const [filters, setFilters] = useState({
    name: "",
    genre: "0",
    year: "",
    language: "",
    voteAverage: [0, 10],
  });

  const genreId = Number(filters.genre);

  // Filter the movies based on all criteria
  let displayedMovies = movies
    .filter((m) => {
      // Title search
      return m.title.toLowerCase().search(filters.name.toLowerCase()) !== -1;
    })
    .filter((m) => {
      // Genre filter
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
    .filter((m) => {
      // Release year filter
      return filters.year ? m.release_date?.startsWith(filters.year) : true;
    })
    .filter((m) => {
      // Language filter
      return filters.language ? m.original_language === filters.language : true;
    })
    .filter((m) => {
      // Vote average filter
      const vote = m.vote_average;
      return vote >= filters.voteAverage[0] && vote <= filters.voteAverage[1];
    });

  const handleChange = (type, value) => {
    setFilters({ ...filters, [type]: value });
  };

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={title} />
      </Grid>
      <Grid container sx={{ flex: "1 1 500px" }}>
        <Grid
          key="find"
          size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
          sx={{ padding: "20px" }}
        >
          <FilterCard
            onUserInput={handleChange}
            titleFilter={filters.name}
            genreFilter={filters.genre}
            yearFilter={filters.year}
            languageFilter={filters.language}
            voteAverageFilter={filters.voteAverage}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
    </Grid>
  );
}

export default MovieListPageTemplate;
