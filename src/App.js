import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <Card />
      <div className="creditos text-center mt-5">
        <p>
          Challenge by <a href="https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U">Frontend Mentor</a>
        </p>
        <p>
          Made by <a href="https://diegopa.com">Diego Padilla</a>
        </p>
        <p>Made with React and Tailwind CSS</p>
      </div>
    </div>
  );
}

export default App;
