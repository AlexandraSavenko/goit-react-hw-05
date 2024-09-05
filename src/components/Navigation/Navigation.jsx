import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
function getNavLinkCl(props) {
  return clsx(css.link, props.isActive && css.isActive);
}
export default function Navigation() {
  return (
    <header className={css.header}>
      <ul className={css.list}>
        <li>
          <NavLink className={getNavLinkCl} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={getNavLinkCl} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
