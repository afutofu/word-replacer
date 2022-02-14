import "./styles/App.css";

import FilterList from "./components/FilterList";
import TextInput from "./components/TextInput";
import TextOutput from "./components/TextOutput";

import { WordFilterProvider } from "./contexts/WordFilterContext";
import { TextProvider } from "./contexts/TextContext";

const App = () => {
  return (
    <WordFilterProvider>
      <TextProvider>
        <div id="app">
          <section>
            <h1 id="title">Word Replacer</h1>
            <FilterList />
            <TextInput />
            <TextOutput />
          </section>
          <footer>
            <p>Source code available on Github</p>
            <p>Developed by Muhammad Afuzarahman and Denise Tanumihardja</p>
          </footer>
        </div>
      </TextProvider>
    </WordFilterProvider>
  );
};

export default App;
