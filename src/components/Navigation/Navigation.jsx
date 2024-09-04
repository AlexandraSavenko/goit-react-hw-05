import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
export default function Navigation() {
  return (
    <header className={css.header}>
      <ul className={css.list}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
    </header>
  );
}
