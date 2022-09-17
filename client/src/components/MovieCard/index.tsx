import * as React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import CardMenu from "./components/CardMenu";

type Movie = {
  _id: string;
  image: string;
  title: string;
  releaseDate: string;
};

interface MovieCardProps {
  movie: Movie;
  onCardSelect: Function;
}

const MovieCard = ({ movie, onCardSelect }: MovieCardProps) => {
  return (
    <Card sx={{ maxWidth: 250, position: "relative" }}>
      <CardMenu onCardSelect={onCardSelect} />

      <CardMedia
        component="img"
        height="250"
        image={movie.image}
        alt={movie.title}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom component="div">
          {movie.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          {movie.releaseDate}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
