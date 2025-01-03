import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

export default function CastCard({ actor }) {
  const { name, character, profile_path } = actor;

  return (
    <Card>
      <CardHeader

        title={
          <Typography variant="h6" component="p">
            {name}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 300 }}
        image={
          profile_path
            ? `https://image.tmdb.org/t/p/w500/${profile_path}`
            : "https://via.placeholder.com/500x750?text=No+Image"
        }
        title={name}
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1" component="p">
              <strong>Character:</strong> {character}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
