import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { App } from "@app/App";
import { Router } from "@app/Router";
import { store } from "@store/index.ts";

import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App>
        <Router />
      </App>
    </Provider>
  </StrictMode>
);
