import { useState } from "react";

function SuperPersonAdd({ handleSavePeeps }) {
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");

  const handleSaveClick = () => {
    let new_peep = { name, superpower };
    handleSavePeeps(new_peep);
    setName("");
    setSuperpower("");
  };

  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id=""
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label htmlFor="superpower">Superpower</label>
      <input
        type="text"
        name="superpower"
        id=""
        value={superpower}
        onChange={(e) => {
          setSuperpower(e.target.value);
        }}
      />
      <button onClick={handleSaveClick}>Save</button>
    </div>
  );
}

export default SuperPersonAdd;
