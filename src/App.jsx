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
import Profile from "./pages/Profile";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import Alerts from "./pages/Alerts";
import HealthyPalms from "./pages/HealthyPalms";
import Footer from "./components/Footer";
import AdminDashboardNavbar from "./components/AdminDashboardNavbar";
import AdminSidebar from "./components/AdminSidebar";

function App() {
  const [count, setCount] = useState(0);
  const [isLogin, setIsLogin] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <>
      {!isAdmin && isLogin && (
        <>
          <DashboardNavbar />
          <div className="w-screen h-[85vh] mt-[5rem]">
            <div className="w-full h-full flex">
              <div className="w-[80%] h-full overflow-auto overflow-x-hidden bg-[#eee]">
                <Routes>
                  <Route path="/" element={<SmartIrrigation />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/alerts" element={<Alerts />} />
                  <Route path="/healthy-palms" element={<HealthyPalms />} />
                </Routes>
              </div>
              <Sidebar />
            </div>
            <Footer />
          </div>
        </>
      )}

      {!isLogin && (
        <>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<LogIn />} />
            <Route exact path="/order" element={<Order />} />
            <Route exact path="/payment" element={<Payment />} />
          </Routes>
        </>
      )}

      {isAdmin && isLogin && (
        <>
          <AdminDashboardNavbar />
          <div className="w-screen h-[85vh] mt-[5rem]">
            <div className="w-full h-full flex">
              <div className="w-[80%] h-full overflow-auto overflow-x-hidden bg-[#eee]">
                <Routes>
                  <Route path="/" element={<SmartIrrigation />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/alerts" element={<Alerts />} />
                  <Route path="/healthy-palms" element={<HealthyPalms />} />
                </Routes>
              </div>
              <AdminSidebar />
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default App;
