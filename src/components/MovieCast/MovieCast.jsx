import { useEffect, useState } from "react";
import { getCast } from "../../fetchdata";
export default function MovieCast() {
  const [movieCast, setMovieCast] = useState(null);
  useEffect(() => {
    async function fetchMovieCast() {
      try {
        const data = await getCast();
      } catch (error) {}
    }
  }, []);
  function getMovieCast() {}
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
