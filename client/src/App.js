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
            <p>
              Source code available on{" "}
              <a
                href="https://github.com/afutofu/word-replacer"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </p>
            <p>
              Developed by{" "}
              <a
                href="https://afutofu.github.io"
                target="_blank"
                rel="noreferrer"
              >
                Muhammad Afuzarahman
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/Detadja"
                target="_blank"
                rel="noreferrer"
              >
                Denise Tanumihardja
              </a>
            </p>
          </footer>
        </div>
      </TextProvider>
    </WordFilterProvider>
  );
};

export default App;
