import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { NextUIProvider } from "@nextui-org/react";
import { createTheme } from "@nextui-org/react";
import MockPreviewProvider from "./actions/mockPreview/store/mockpreview.store";

const theme = createTheme({
  type: "dark",
});

ReactDOM.render(
  <React.StrictMode>
    <NextUIProvider theme={theme}>
      <MockPreviewProvider>
        <App />
      </MockPreviewProvider>
    </NextUIProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
