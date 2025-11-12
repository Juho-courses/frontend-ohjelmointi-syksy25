import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import TopicView from "./views/TopicView";
import Layout from "./Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aihe1" element={<TopicView />} />
          <Route path="aihe2" element={<TopicView />} />
          <Route path="aihe3" element={<TopicView />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
