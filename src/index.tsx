import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// Components
import App from "./App";
import ParentContainer from "./components/layout/ParentContainer";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ParentContainer>
      <App />
    </ParentContainer>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
