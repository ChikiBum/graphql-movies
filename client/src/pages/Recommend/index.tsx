import { useSearchParams } from "react-router-dom";
import { Typography, Grid } from "@mui/material";
import { useQuery } from "@apollo/client";
import { MOVIES_BY_IDS_QUERY } from "./queries";
import { MovieCard } from "../../components";
import { Movie } from "../../components/MovieCard";

const Recommend = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const { loading, error, data } = useQuery(MOVIES_BY_IDS_QUERY, {
    variables: {
      ids: searchParams
        .get("ids")
        ?.split(",")
        .map((id) => +id),
    },
  });

  if (loading) {
    return <div>loading.....</div>;
  }

  if (error) {
    return <div>"We have an ERROR in Home componet whem query the data";</div>;
  }

  return (
    <>
      <Typography variant="h1" gutterBottom>
        {searchParams.get("title")}
      </Typography>
      {data.moviesByIds.map((movie: Movie) => (
        <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
          <MovieCard
            movie={movie}
            onCardSelect={() => null}
            onCardDelete={() => null}
          />
        </Grid>
      ))}
    </>
  );
};

export default Recommend;
