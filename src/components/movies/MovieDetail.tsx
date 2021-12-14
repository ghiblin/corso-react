import { CSSProperties } from "react";
import { Movie } from "../../movie";

interface MovieDetailProps {
  movie: Movie;
  style?: CSSProperties;
  onClick?: (id: Movie["imdbID"]) => void;
}

const MovieDetail = ({
  movie: { Title, Type, Year, Poster, imdbID },
  style,
  onClick,
}: MovieDetailProps) => {
  return (
    <div
      style={{ ...style, maxWidth: "300px" }}
      onClick={() => onClick?.(imdbID)}
    >
      <img src={Poster} alt={Title} width="300px" />
      <h3>{Title}</h3>
      <h4>{Year}</h4>
    </div>
  );
};

export default MovieDetail;
