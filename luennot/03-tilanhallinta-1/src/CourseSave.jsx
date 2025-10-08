import { useState } from "react";

function CourseSave({ handleSaveClick }) {
  const [kurssinimi, setKurssinimi] = useState("");
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
            handleSaveClick(kurssinimi);
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
