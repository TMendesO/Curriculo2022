import "./App.scss";
import Presentetion from "./components/presentetion/Presentetion";
import About from "./components/about/About";

function App() {
  return (
    <>
      <div className="container">
        <Presentetion />
      </div>
      <div>
        <About />
      </div>
    </>
  );
}

export default App;
