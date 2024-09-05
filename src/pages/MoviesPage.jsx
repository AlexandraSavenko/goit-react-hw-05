import { useState } from "react";

export default function MoviesPage() {
  const [errorQuery, setErrorQuery] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.movieName.value.trim();
    if (!query) {
      setErrorQuery(true);
      return;
    }

    setErrorQuery(false);
    return query;
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="movieName" />

        <button type="submit">Search</button>
      </form>
      {errorQuery && <p>You need to fill in your query!</p>}
    </div>
  );
}
