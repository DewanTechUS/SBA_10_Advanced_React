

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;
    navigate(`/search?query=${encodeURIComponent(trimmedQuery)}`);
    setQuery("");
  }

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link className="brand" to="/">
          Recipe Discovery
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>

        <form className="search" onSubmit={onSubmit}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search meals..."
            aria-label="Search meals"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  );
}
