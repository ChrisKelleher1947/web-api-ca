import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovieCredits } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CastCard from "../components/castCard";  // Import the CastCard component

const MovieCastPage = () => {
  const { id } = useParams(); 
  const { data, error, isLoading, isError } = useQuery(
    ["movieCredits", { id }],
    getMovieCredits
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const { cast } = data; // Extract the cast data to use cast

  return (
    <>
      <Typography variant="h5" component="h3" sx={{ margin: 2 }}>
        Cast
      </Typography>

      {/* Display cast members */}
      <Grid container spacing={2} sx={{ margin: 2 }}>
        {cast && cast.length > 0 ? (
          cast.map((actor) => (
            <Grid item xs={12} sm={6} md={4} key={actor.id}>
              <CastCard actor={actor} /> {/* Use the CastCard component */}
            </Grid>
          ))
        ) : (
          <Typography variant="h6" component="p" sx={{ textAlign: "center", width: "100%" }}>
            No cast information available.
          </Typography>
        )}
      </Grid>
    </>
  );
};

export default MovieCastPage;
