import { Fragment } from "react";
import { Link } from "react-router-3";

export default function LayoutPrincipal(props) {
  return (
    <>
      <header>
        <h1>
          <Link to="/">Logo</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/africa">África</Link>
            </li>
            <li>
              <Link to="/america">América</Link>
            </li>
            <li>Asia</li>
            <li>Europa</li>
            <li>Oceania</li>
          </ul>
        </nav>
      </header>

      {props.children}

      <footer>Front End 3 - Digital House, 2021.</footer>
    </>
  );
}
