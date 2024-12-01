import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

const About = () => {
  return (
    <>
      <h1>About</h1>
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
);
