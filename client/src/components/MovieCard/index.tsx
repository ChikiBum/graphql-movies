import * as React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  MenuItem,
} from "@mui/material";
// import CardMenu from "./components/CardMenu";
import CardMenu from "../CardMenu";

export type Movie = {
  id: string;
  posterPath: string;
  title: string;
  releaseDate: string;
};

interface MovieCardProps {
  movie: Movie;
  onCardSelect: Function;
}

const MovieCard = ({ movie, onCardSelect }: MovieCardProps) => {
  return (
    <Card sx={{ maxWidth: 250, position: "relative", height: "100%" }}>
      <CardMenu>
        <MenuItem onClick={() => onCardSelect()}>Select</MenuItem>
      </CardMenu>

      <CardMedia
        component="img"
        height="250"
        image={movie.posterPath}
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
