import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/Login";
import Order from "./pages/Order";
import Payment from "./pages/Payment";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SmartIrrigation from "./pages/SmartIrrigation";
import DashboardNavbar from "./components/DashboardNavbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DashboardNavbar />
      <div className="w-screen h-[92vh] mt-[5rem]">
        <div className="w-full h-full flex">
          <div className="w-[80%] h-full overflow-auto bg-[#eee]">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<LogIn />} />
              <Route exact path="/order" element={<Order />} />
              <Route exact path="/payment" element={<Payment />} />
              <Route path="/smart-irrigation" element={<SmartIrrigation />} />
            </Routes>
          </div>
          <Sidebar />
        </div>
      </div>
      {/* 
        <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<LogIn />} />
      <Route exact path="/order" element={<Order />} />
      <Route exact path="/payment" element={<Payment />} /> 
      */}
    </>
  );
}

export default App;
