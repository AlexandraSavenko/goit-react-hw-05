export default function MoviesPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.movieName.value;
    console.log(query);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="movieName" />
      <button type="submit">Search</button>
    </form>
  );
}
