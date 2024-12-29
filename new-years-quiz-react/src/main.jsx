// The main container for the app

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Components/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
