import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { NextUIProvider } from "@nextui-org/react";
import { createTheme } from "@nextui-org/react";

const theme = createTheme({
  type: "dark",
});

ReactDOM.render(
  <React.StrictMode>
    <NextUIProvider theme={theme}>
      <App />
    </NextUIProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
