import { useState } from "react";

function App() {
  const [jokes, setJokes] = useState([]);

  const fetchJoke = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const json = await response.json();
    const joke = json["value"];
    setJokes([...jokes, joke]);
  };

  return (
    <>
      <h1>vitsejä</h1>

      <button onClick={fetchJoke}>hae vitsi</button>

      {jokes.length > 0 && (
        <div>
          <ul>
            {jokes.map((joke, index) => {
              return <li key={index}>{joke}</li>;
            })}
          </ul>
        </div>
      )}

      {jokes.length === 0 && <p>Ei vitsejä ladattu</p>}
    </>
  );
}

export default App;
