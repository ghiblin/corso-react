import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieForm from "../components/movies/MovieForm";
import MovieList from "../components/movies/MovieList";
import useFetch from "../hooks/useFetch";
import { Movie } from "../movie";

type MovieResponse =
  | {
      Response: "False";
      Error: string;
    }
  | {
      Response: "True";
      Search: Movie[];
      totalResults: string;
    };

const Movies = () => {
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();

  function navigateToMovie(id: Movie["imdbID"]): void {
    navigate(`/movies/${id}`);
  }

  const data = useFetch<MovieResponse>(
    `${process.env.REACT_APP_APIURL}?apikey=${process.env.REACT_APP_APIKEY}&s=${query}`
  );

  return (
    <section>
      <h1>Movies</h1>
      <MovieForm search={setQuery} />
      {data?.Response === "True" ? (
        <MovieList movies={data.Search} navigateToMovie={navigateToMovie} />
      ) : null}
    </section>
  );
};

export default Movies;
