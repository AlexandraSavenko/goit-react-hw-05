export default function MovieList({ allMovies }) {
  return (
    <ul>
      {allMovies.map((movie) => (
        <li key={movie.id}>
          <a href="">{movie.title}</a>
        </li>
      ))}
    </ul>
  );
}
