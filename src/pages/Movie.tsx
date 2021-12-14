import { useParams } from "react-router-dom";
import MovieDetail from "../components/movies/MovieDetail";
import useFetch from "../hooks/useFetch";
import { Movie } from "../movie";

type MovieResponse =
  | (Movie & { Response: "True" })
  | {
      Response: "False";
      Error: string;
    };

const MoviePage = () => {
  const { id } = useParams();
  const data = useFetch<MovieResponse>(
    `${process.env.REACT_APP_APIURL}?apikey=${process.env.REACT_APP_APIKEY}&i=${id}`
  );

  if (!data) {
    return <section>Loading...</section>;
  }

  if (data.Response === "False") {
    return (
      <section
        style={{
          backgroundColor: "rebeccapurple",
          padding: "2rem",
          color: "white",
        }}
      >
        <h1>{data.Error}</h1>
      </section>
    );
  }
  return (
    <section>
      <MovieDetail movie={data} />
    </section>
  );
};

export default MoviePage;
