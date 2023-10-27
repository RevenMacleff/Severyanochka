import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "src/app/App";
import { setupStore } from "src/store/store";
import ThemeProvider from "./theme/ThemeProvider";

const store = setupStore();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <App></App>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
