import { AutoComplete } from "./components/auto-complete/AutoComplete";
import "./App.scss";

function App() {

  return (
    <div className="App">
      <header>
        <h1>LOOKING FOR AN EMPLOYEE?</h1>
        <h2>Click on search button to see results</h2>
      </header>
      <main>
        <div className="row-container">
          <AutoComplete />
        </div>
      </main>
    </div>
  );
}

export default App;
