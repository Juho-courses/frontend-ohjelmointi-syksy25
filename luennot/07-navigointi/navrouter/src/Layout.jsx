import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  const [asd, setAsd] = useState(0);
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aihe1">Aihe1</Link>
          </li>
          <li>
            <Link to="/aihe2">Aihe2</Link>
          </li>
          <li>
            <Link to="/aihe3">Aihe3</Link>
          </li>
        </ul>
      </nav>
      <button onClick={() => setAsd(asd + 1)}>{asd}</button>
      <h1>Hieno softa</h1>
      <Outlet />
    </div>
  );
}
