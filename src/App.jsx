import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/Login";



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
      <Route exact path="/login" element={<LogIn />} />
    </Routes>
  );
}

export default App;
