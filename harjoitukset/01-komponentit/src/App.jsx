function App() {
  return (
    <>
      <Header />
      <MainBody />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header>
      <h1>Tämä on header</h1>
    </header>
  );
}

function MainBody() {
  return (
    <div>
      <h2>Tänne laitetaan sisältö.</h2>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <h4>Tänne footerin sisältö (esim. linkkejä).</h4>
    </footer>
  );
}

export default App;
