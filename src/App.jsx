import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

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

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
