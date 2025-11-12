import { useEffect, useState } from "react";
import Home from "./views/Home";
import TopicView from "./views/TopicView";

function App() {
  const [page, setPage] = useState("");
  const [asd, setAsd] = useState(1);

  useEffect(() => {
    const path = window.location.pathname.slice(1);
    console.log({ path });

    setPage(path);
  }, []);

  const handlePathChange = (p) => {
    setPage(p);
    window.location.pathname = p;
  };
  return (
    <div>
      <nav>
        <ul>
          <li
            onClick={() => {
              handlePathChange("");
            }}
          >
            home
          </li>
          <li
            onClick={() => {
              handlePathChange("aihe1");
            }}
          >
            aihe1
          </li>
          <li
            onClick={() => {
              handlePathChange("aihe2");
            }}
          >
            aihe2
          </li>
        </ul>
      </nav>
      <button onClick={() => setAsd(asd + 1)}>{asd}</button>
      <h1>Hieno softa</h1>
      {page}

      {page == "" && <Home />}

      {page == "aihe1" && <TopicView viewNum={1} />}
      {page == "aihe2" && <TopicView viewNum={2} />}
    </div>
  );
}

export default App;
