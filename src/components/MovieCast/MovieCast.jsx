import { useEffect, useState } from "react";
import { getCast } from "../../fetchdata";
export default function MovieCast() {
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        const data = await getCast();
        setMovieCast(data.results);
        console.log(movieCast);
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
