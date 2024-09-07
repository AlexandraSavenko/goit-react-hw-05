import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { getInfo } from "../../fetchdata";
import RevList from "../RevList/RevList";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useOutletContext();

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        const data = await getInfo(movieId, "reviews");
        setMovieReviews(data.results);
      } catch (error) {}
    }
    fetchMovieReviews();
  }, [movieId]);
  return (
    <ul className={css.list}>
      {movieReviews.length > 0 &&
        movieReviews.map((rev, index) => (
          <li className={css.item} key={rev.id || index}>
            {" "}
            {<RevList info={rev} />}
          </li>
        ))}
    </ul>
  );
}
