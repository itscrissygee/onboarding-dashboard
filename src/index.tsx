import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Make sure this matches the filename of your App.tsx
import reportWebVitals from "./reportWebVitals"; // Same for reportWebVitals.ts

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Report web vitals (optional, depending on your setup)
reportWebVitals();
