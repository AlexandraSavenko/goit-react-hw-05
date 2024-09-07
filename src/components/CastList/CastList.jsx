import { BsFileEarmarkPerson } from "react-icons/bs";
import css from "./CastList.module.css";
export default function CastList({ info }) {
  const photoPath = info.profile_path
    ? `https://image.tmdb.org/t/p/w100/${info.profile_path}`
    : null;

  return (
    <div className={css.cardWrap}>
      {photoPath ? (
        <img src={photoPath} alt={`${info.name}'s photo`} className={css.img} />
      ) : (
        <BsFileEarmarkPerson className={css.placeholderIcon} />
      )}

      <ul>
        <li className={css.name}>{info.name}</li>
        <li>{`Character: ${info.character}`}</li>
      </ul>
    </div>
  );
}
