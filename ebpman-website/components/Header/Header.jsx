import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
  return (
    <header className="header-wrapper">
      <div className="logo">
        <Link to="/">
          <a className="h4">Ebpman Tech Reviews Blog</a>
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/">
          <span className="nav-link-1">
            <a className="h4">About</a>
          </span>
        </Link>
        <Link to="/article">
          <span className="nav-link-2">
            <a className="h4">Articles</a>
          </span>
        </Link>
      </div>
    </header>
  );
}
