import { useState } from "react";
import { useCourseStore } from "./stores/useCourseStore";

function CourseSave() {
  const [kurssinimi, setKurssinimi] = useState("");

  const addCourse = useCourseStore((state) => state.addCourse);

  return (
    <div>
      <h3>Kurssilistaus</h3>

      <div>
        <input
          type="text"
          name=""
          id=""
          value={kurssinimi}
          onChange={(e) => {
            setKurssinimi(e.target.value);
          }}
        />
        <button
          onClick={() => {
            addCourse(kurssinimi);
            setKurssinimi("");
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default CourseSave;
