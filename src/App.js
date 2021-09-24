import { useContext, createContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import TodoList from "./component/TodoList";
import { Button } from "@material-ui/core";

const themes = {
  light: {
    text: "#00FFFF",
    background: "#000000",
  },
  dark: {
    text: "#8A2BE2",
    background: "#DC143C",
  },
};

const ThemeContext = createContext();

export default function App() {
  const [valueTheme, setValueTheme] = useState(themes.dark);
  const theme = useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={valueTheme}>
      <div>
        <BrowserRouter>
          <header style={{ backgroundColor: valueTheme.background }}>
            <div className="title" >
              <p style={{ color: valueTheme.text }}>KELOMPOK 35</p>
            </div>
            <nav >
              <Button 
                variant="contained"
                className="Button"
                onClick={() =>
                  setValueTheme(
                    valueTheme === themes.light ? themes.dark : themes.light
                  )
                }>CHANGE COLOR</Button>
            </nav>
          </header>
          <Switch>
            <Route path="/" exact component={TodoList}>
                <div className='todo-app'>
                  <TodoList />
                </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}


