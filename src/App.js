import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <ButtonComponent text="Visita il sito" />
      <ImageComponent src="https://www.donnamoderna.com/content/uploads/2021/02/motivi-per-adottare-un-gatto.jpg" alt="gatto" />
    </div>
  );
}

export default App;
