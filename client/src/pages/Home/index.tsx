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
  const loadGrain = (arr: any) => {
    if (arr.length < 3) {
      return 0;
    }

    const lastIndex = arr.length - 1;
    const firstValue = arr[0];

    const even = (el: any) => el === firstValue;

    if (arr.every(even)) {
      return 0;
    }

    if (arr.length === 3 && arr[1] > firstValue) {
      return 0;
    }

    let prevBlockHeight = 0;
    let prevBlockIndex = 0;
    let candidate = 0;

    return arr.reduce(function (
      accumulator: number,
      currentValue: number,
      index: number,
      array: any
    ) {
      if (index === 0) {
        prevBlockHeight = currentValue;
      }
      if (prevBlockHeight > currentValue) {
        candidate = candidate + (prevBlockHeight - currentValue);
      }
      if (prevBlockHeight < currentValue) {
        accumulator = accumulator + candidate;
        prevBlockHeight = currentValue;
        prevBlockIndex = index;
        candidate = 0;
      }
      if (index === lastIndex) {
        if (currentValue < prevBlockHeight) {
          accumulator =
            accumulator +
            candidate -
            (prevBlockHeight - currentValue) * (lastIndex - prevBlockIndex);
        } else {
          accumulator = accumulator + candidate;
        }
      }
      return accumulator;
    },
    0);
  };
  console.log("loadGrain([4, 1, 3]): ", loadGrain([4, 1, 3]));
  console.log(
    "loadGrain([2, 1, 5, 2, 7, 4, 10]): ",
    loadGrain([2, 1, 5, 2, 7, 4, 10])
  );
  console.log("loadGrain([2, 0, 1, 5, 2, 7]): ", loadGrain([2, 0, 1, 5, 2, 7]));
  console.log("loadGrain([2, 4, 2]): ", loadGrain([2, 4, 2]));

  console.log("loadGrain([8, 1, 3, 2]): ", loadGrain([8, 1, 3, 2]));
  console.log(
    "loadGrain([4, 0, 1, 2, 0, 0, 3, 0, 1, 2]): ",
    loadGrain([4, 0, 1, 2, 0, 0, 3, 0, 1, 2])
  );
  console.log("loadGrain([4, 0, 1, 3]): ", loadGrain([4, 0, 1, 3]));

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
