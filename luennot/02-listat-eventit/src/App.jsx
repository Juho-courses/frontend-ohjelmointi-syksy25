import ListItem from "./ListItem";
import SubTitle from "./SubTitle";

function App() {
  const kurssit = [
    "ohjelmointi2",
    "nosql",
    "backend",
    "vaatimusmäärittely",
    "git",
  ];
  return (
    <div>
      <h1>Moro</h1>
      <SubTitle />

      {/* <pre>{JSON.stringify(kurssit, null, 2)}</pre> */}

      <ul>
        {kurssit.map((kurssi, index) => {
          return <ListItem nimi={kurssi} key={index} />;
        })}
      </ul>

      <ul>
        <ListItem nimi="hassusana" />
        <li>Fronttidevaus</li>
        <li>tietokantasuunnittelu</li>
      </ul>
    </div>
  );
}

export default App;
