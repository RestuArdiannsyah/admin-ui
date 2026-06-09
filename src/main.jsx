// AI Asli Ini
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeContextProvider } from "./context/themeContext.jsx";

import Form from "./latihan/Form.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      {/* <App /> */}
      <Form />
    </ThemeContextProvider>
  </StrictMode>,
);

// latihan
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import Parent from "./latihan/Parent.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Parent />
//   </React.StrictMode>,
// );

// context
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import Parent from "./latihan/Parent.jsx";
// import { CounterContextProvider } from "./context/counterContext.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <CounterContextProvider>
//       <Parent />
//     </CounterContextProvider>
//   </React.StrictMode>,
// );
