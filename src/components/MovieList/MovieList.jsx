import { Link } from "react-router-dom";

export default function MovieList({ allMovies }) {
  return (
    <ul>
      {allMovies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
}
