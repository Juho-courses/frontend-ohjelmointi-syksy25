import { usePeepsStore } from "../stores/usePeepsStore";
import SuperPerson from "./SuperPerson";

function SuperPeople() {
  const { peeps } = usePeepsStore();
  return (
    <div>
      <ul>
        {peeps.map((peep, index) => {
          return (
            <SuperPerson
              key={index}
              name={peep.name}
              superpower={peep.superpower}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default SuperPeople;
