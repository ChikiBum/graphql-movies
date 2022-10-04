import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Paper, Pagination } from "@mui/material";
import { MovieCard } from "../../components";
import { useQuery } from "@apollo/client";
import { MOVIES_QUERY } from "./queries";
import { Movie } from "../../components/MovieCard";

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: "calc(100vh - 15vh)",
  position: "sticky",
  top: theme.spacing(2),
}));

const Home = () => {
  const [page, setPage] = useState(1);
  console.log("page: ", page);
  const { loading, error, data } = useQuery(MOVIES_QUERY, {
    variables: { page },
  });

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
              {loading && "Loading...."}
              {data && (
                <Grid container spacing={2}>
                  {data.movies.results.map((movie: Movie) => (
                    <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                      <MovieCard movie={movie} onCardSelect={() => {}} />
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
                count={data?.movies?.totalResults}
                page={page}
                onChange={paginationHandler}
              />
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
