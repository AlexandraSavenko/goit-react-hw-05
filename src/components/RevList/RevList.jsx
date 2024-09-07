import css from "./RevList.module.css";
export default function RevList({ info }) {
  return (
    <ul>
      <li className={css.name}>{info.author}</li>
      <li>{info.content}</li>
    </ul>
  );
}
