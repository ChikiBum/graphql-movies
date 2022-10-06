import * as React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import FavotireMovieMenu from "../FavotireMovieMenu";

type Genres = {
  id: number;
  name: string;
};

export type Movie = {
  id: string;
  posterPath: string;
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
    <Card sx={{ display: "flex", marginBottom: 1, minHeight: "164px" }}>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={movie.posterPath}
        alt={movie.title}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          position: "relative",
        }}
      >
        <FavotireMovieMenu
          isSelected={true}
          onCardDelete={onCardDelete}
          onCardSelect={() => null}
          movie={movie}
        />

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
