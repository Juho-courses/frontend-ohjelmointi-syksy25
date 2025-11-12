import Header from "./components/Header";
import Footer from "./components/Footer";
import MainBody from "./components/MainBody";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import SuperPeople from "./components/SuperPeople";
import SuperPersonAdd from "./components/SuperPersonAdd";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/listaus" element={<SuperPeople />} />
        <Route path="/lisays" element={<SuperPersonAdd />} />
      </Route>
    </Routes>
  );
}

export default App;
