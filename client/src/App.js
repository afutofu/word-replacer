import "./styles/App.css";

import FilterList from "./components/FilterList";
import TextInput from "./components/TextInput";

import { WordFilterProvider } from "./contexts/WordFilterContext";
import { TextInputProvider } from "./contexts/TextInputContext";

const App = () => {
  return (
    <WordFilterProvider>
      <TextInputProvider>
        <div id="app">
          <section>
            <h1 id="title">Word Replacer</h1>
            <FilterList />
            <TextInput />
          </section>
          <footer>
            <p>Source code available on Github</p>
            <p>Developed by Muhammad Afuzarahman and Denise Tanumihardja</p>
          </footer>
        </div>
      </TextInputProvider>
    </WordFilterProvider>
  );
};

export default App;
