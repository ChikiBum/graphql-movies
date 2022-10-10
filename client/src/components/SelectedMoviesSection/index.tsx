import { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { MovieCardSelected, SelectedMoviesForm, ConfirmModal } from "..";
import noMoviesImageSrc from "../../assets/no_movies.png";
import { Movie } from "../MovieCard";

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: "calc(100vh - 140px)",
  position: "sticky",
  top: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
}));

const MoviesList = styled(Stack)(({ theme }) => ({
  overflowY: "scroll",
  height: "100%",
}));

const NoMovies = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

interface SelectedMoviesSectionProps {
  selectedMovies: Movie[];
  deleteMovie: Function;
}

const SelectedMoviesSection = ({
  selectedMovies,
  deleteMovie,
}: SelectedMoviesSectionProps) => {
  const [listName, setListName] = useState<string>("");
  const [link, setLink] = useState<string>("");

  const onSubmit = (props: any) => {
    console.log("props: ", props);
    const ids = selectedMovies.map((movie) => movie.id);
    const link = `${window.location.host}/recommend?title=${
      props.listName
    }&ids=${ids.join()}`;

    setListName(props.listName);
    setLink(link);
  };

  const onCloseConfirmModal = () => setLink("");

  if (!selectedMovies.length) {
    return (
      <SelectedMovies>
        <NoMovies>
          <Box
            component="img"
            sx={{
              width: "50%",
              opacity: ".6",
            }}
            alt="No images."
            src={noMoviesImageSrc}
          />
          <Typography variant="h5" mt={2}>
            No selected movies
          </Typography>
        </NoMovies>
      </SelectedMovies>
    );
  }

  // @ts-ignore-start
  return (
    <SelectedMovies>
      <MoviesList spacing={2}>
        {selectedMovies.map((movie) => (
          <MovieCardSelected
            key={movie.id}
            movie={movie}
            onCardDelete={deleteMovie}
          />
        ))}
      </MoviesList>
      <Box pt={2}>
        <SelectedMoviesForm onSubmit={onSubmit} />
      </Box>
      <ConfirmModal
        url={link}
        title={listName}
        open={!!link}
        onClose={onCloseConfirmModal}
      />
    </SelectedMovies>
  );
};
// @ts-ignore-end

export default SelectedMoviesSection;
