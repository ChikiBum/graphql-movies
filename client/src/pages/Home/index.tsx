import { useState } from "react";
import { Box, Grid, Paper, Pagination, Skeleton, Card } from "@mui/material";
import { MovieCard, SelectedMoviesSection } from "../../components";
import { useQuery } from "@apollo/client";
import { MOVIES_QUERY } from "./queries";
import { Movie } from "../../components/MovieCard";
import { useMovies } from "../../hooks/useMovies";

const Home = () => {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(MOVIES_QUERY, {
    variables: { page },
  });
  const { selectMovie, selectedMovies, deleteMovie } = useMovies();

  const paginationHandler = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  if (error) {
    return <div>"We have an ERROR in Home componet whem query the data";</div>;
  }

  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>Filters sction</Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper>
            <Box sx={{ flexGrow: 1, padding: 1 }}>
              {loading && (
                <Grid container spacing={2}>
                  {Array.apply(null, Array(20)).map((el, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                      <Card
                        sx={{
                          maxWidth: 250,
                          height: 400,
                          position: "relative",
                          // height: "100%",
                          marginBottom: 10,
                        }}
                      >
                        <Skeleton />
                        <Skeleton width="60%" />
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              )}
              {data && (
                <Grid container spacing={2}>
                  {data.movies.results.map((movie: Movie) => (
                    <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                      <MovieCard
                        selectedMovies={selectedMovies}
                        movie={movie}
                        onCardSelect={selectMovie}
                        onCardDelete={deleteMovie}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
            <Box
              mt={2}
              pb={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Pagination
                count={
                  data?.movies?.totalPages < 499 ? data.movies.totalPages : 499
                }
                page={page}
                onChange={paginationHandler}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectedMoviesSection
            selectedMovies={selectedMovies}
            deleteMovie={deleteMovie}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
