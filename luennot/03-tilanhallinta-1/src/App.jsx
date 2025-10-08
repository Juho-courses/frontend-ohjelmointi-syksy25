import { useState } from "react";
import SubTitle from "./SubTitle";
import CourseList from "./CourseList";
import CourseSave from "./CourseSave";

function App() {
  const kurssit_orig = [
    "ohjelmointi2",
    "nosql",
    "backend",
    "vaatimusmäärittely",
    "git",
  ];
  const [kurssit, setKurssit] = useState(kurssit_orig);

  const handleSaveClick = (kurssinimi) => {
    let uusi_kurssit = [...kurssit, kurssinimi];
    setKurssit(uusi_kurssit);
  };
  return (
    <div>
      <h1>Moro</h1>
      <SubTitle />

      <CourseSave handleSaveClick={handleSaveClick} />
      <CourseList kurssit={kurssit} />
    </div>
  );
}

export default App;
