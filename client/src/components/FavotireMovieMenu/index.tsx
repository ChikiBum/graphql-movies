import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { Movie } from "../MovieCard";

interface FavotireMovieMenuProps {
  movie: Movie;
  isSelected: Boolean;
  onCardSelect: Function;
  onCardDelete: Function;
}

const FavotireMovieMenu = ({
  isSelected,
  onCardDelete,
  onCardSelect,
  movie,
}: FavotireMovieMenuProps) => {
  return (
    <div
      style={{
        position: "absolute",
        right: 10,
        bottom: 0,
      }}
    >
      {isSelected ? (
        <Favorite onClick={() => onCardDelete(movie)} color="primary" />
      ) : (
        <FavoriteBorder onClick={() => onCardSelect(movie)} color="primary" />
      )}
    </div>
  );
};

export default FavotireMovieMenu;
