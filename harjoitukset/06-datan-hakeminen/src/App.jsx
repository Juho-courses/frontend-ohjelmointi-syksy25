import Header from "./components/Header";
import Footer from "./components/Footer";
import MainBody from "./components/MainBody";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
