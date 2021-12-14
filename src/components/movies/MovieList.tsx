import { Movie } from "../../movie";
import MovieDetail from "./MovieDetail";

interface MovieListProps {
  movies: Movie[];
  navigateToMovie: (id: Movie["imdbID"]) => void;
}

const MovieList = ({ movies, navigateToMovie }: MovieListProps) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {movies.map((movie) => (
        <MovieDetail
          key={movie.imdbID}
          movie={movie}
          onClick={navigateToMovie}
        />
      ))}
    </div>
  );
};

export default MovieList;
