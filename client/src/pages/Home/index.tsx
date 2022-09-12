import { styled } from "@mui/material/styles";
import { Box, Grid, Paper } from "@mui/material";
import { MovieCard } from "../../components";

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: "calc(100vh - 15vh)",
  position: "sticky",
  top: theme.spacing(2),
}));

const movie = {
  image: "image",
  title: "title",
  releaseDate: "releaseDate",
};

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>Filters sction</Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper>
            <Box sx={{ flexGrow: 1, padding: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <MovieCard movie={movie} onCardSelect={() => {}} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <MovieCard movie={movie} onCardSelect={() => {}} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <MovieCard movie={movie} onCardSelect={() => {}} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <MovieCard movie={movie} onCardSelect={() => {}} />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectedMovies>Selected movies</SelectedMovies>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
