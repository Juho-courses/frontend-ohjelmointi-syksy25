import SuperPerson from "./SuperPerson";

function SuperPeople({ peeps }) {
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
