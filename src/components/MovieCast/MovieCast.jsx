import { useEffect, useState } from "react";
import { getCast } from "../../fetchdata";
import { useOutletContext } from "react-router-dom";
export default function MovieCast() {
  const [movieCast, setMovieCast] = useState(null);
  const { movieId } = useOutletContext();

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        const data = await getCast(movieId);
        setMovieCast(data.cast);
        console.log(data.cast);
      } catch (error) {}
    }
    fetchMovieCast();
  }, []);

  return (
    <div>
      <img src="" alt="" />
      <ul>
        <li>
          <p></p>
        </li>
        <li>
          <p>Character name:</p>
        </li>
      </ul>
    </div>
  );
}
