import { useState } from "react";
import SuperPeople from "./SuperPeople";
import SuperPersonAdd from "./SuperPersonAdd";

function MainBody() {
  const peeps_og = [
    { name: "Batman", superpower: "Echo location" },
    { name: "Spiderman", superpower: "Spidey sense" },
  ];

  const [peeps, setPeeps] = useState(peeps_og);

  const handleSavePeeps = (new_peep) => {
    setPeeps([...peeps, new_peep]);
  };

  return (
    <div>
      <h2>Tänne laitetaan sisältö.</h2>

      <SuperPersonAdd handleSavePeeps={handleSavePeeps} />
      <SuperPeople peeps={peeps} />
    </div>
  );
}

export default MainBody;
