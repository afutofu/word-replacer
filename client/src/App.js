import "./styles/App.css";

import FilterList from "./components/FilterList";
import TextInput from "./components/TextInput";

const App = () => {
  return (
    <div id="app">
      <h1 id="title">Word Replacer</h1>
      <FilterList />
      <TextInput />
      <footer>
        <p>Source code available on Github</p>
        <p>Developed by Muhammad Afuzarahman and Denise Tanumihardja</p>
      </footer>
    </div>
  );
};

export default App;
