import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import FavotireMovieMenu from "../FavotireMovieMenu";

export type Movie = {
  id: string;
  posterPath: string;
  title: string;
  releaseDate: string;
};

interface MovieCardProps {
  movie: Movie;
  onCardSelect: Function;
  onCardDelete: Function;
  selectedMovies: Movie[];
}

const MovieCard = ({
  movie,
  onCardSelect,
  onCardDelete,
  selectedMovies,
}: MovieCardProps) => {
  const isSelected = selectedMovies.some((m) => m.id === movie.id);

  return (
    <Card
      sx={{
        maxWidth: 250,
        height: 400,
        position: "relative",
        marginBottom: 10,
      }}
    >
      <FavotireMovieMenu
        isSelected={isSelected}
        onCardDelete={onCardDelete}
        onCardSelect={onCardSelect}
        movie={movie}
      />

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
