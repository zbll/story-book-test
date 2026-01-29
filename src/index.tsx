import React from "react";
import ReactDOM from "react-dom/client";
import Story from "./main";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(
  <React.StrictMode>
    <Story />
  </React.StrictMode>,
);
