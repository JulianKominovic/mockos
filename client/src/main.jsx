import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { NextUIProvider } from "@nextui-org/react";
import { createTheme } from "@nextui-org/react";
import MockPreviewProvider from "./actions/mockPreview/store/mockpreview.store";
import CollectionsProvider from "./actions/collections/store/collections.store";
import AngryModeProvider from "./context/angryMode.context";

const theme = createTheme({
  type: "dark",
});

ReactDOM.render(
  <React.StrictMode>
    <NextUIProvider theme={theme}>
      <MockPreviewProvider>
        <CollectionsProvider>
          <AngryModeProvider>
            <App />
          </AngryModeProvider>
        </CollectionsProvider>
      </MockPreviewProvider>
    </NextUIProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
