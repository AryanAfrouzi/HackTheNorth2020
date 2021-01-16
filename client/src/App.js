import styled, { ThemeProvider } from "styled-components";
import NoSsr from "@material-ui/core/NoSsr";
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import Theme from "./theme";
import "./App.css";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <NoSsr>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={Theme}>
          <ThemeProvider theme={Theme}>
            <div className="App">
              <Button variant="contained">Default</Button>
            </div>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </NoSsr>
  );
}

export default App;
