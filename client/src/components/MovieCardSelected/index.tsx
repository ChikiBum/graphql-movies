import * as React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

type Genres = {
  _id: number;
  name: string;
};

type Movie = {
  _id: string;
  image: string;
  title: string;
  releaseDate: string;
  genres: Genres[];
  runtime: number;
};

interface MovieCardSelectedProps {
  movie: Movie;
  onCardDelete: Function;
}

const MovieCardSelected = ({ movie, onCardDelete }: MovieCardSelectedProps) => {
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={movie.image}
        alt={movie.title}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {movie.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {movie.releaseDate}
          </Typography>
        </CardContent>
        <Box sx={{ p: 2 }}>
          {movie.genres?.length ? (
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              genres: {movie.genres[0].name}
            </Typography>
          ) : null}
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Length: {movie.runtime}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default MovieCardSelected;
