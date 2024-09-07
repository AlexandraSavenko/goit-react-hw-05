import css from "./SearchForm.module.css";
export default function SearchForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.movieName.value.trim();
    onSubmit(query);
    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input className={css.input} type="text" name="movieName" />

      <button type="submit">Search</button>
    </form>
  );
}
