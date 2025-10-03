import SuperPerson from "./SuperPerson";

function SuperPeople() {
  const peeps = [
    { name: "Batman", superpower: "Echo location" },
    { name: "Spiderman", superpower: "Spidey sense" },
  ];

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
