// import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import { navigation } from "../constants";
import torbahLogo from "../assets/icons/Torbah-logo with text-01.svg";
import Person from "../assets/icons/person.svg";

const DashboardNavbar = () => {
  // const { loginWithRedirect, logout, user, isLoading } = useAuth0();
  return (
    <header
      className="z-40 fixed top-0 left-0 w-full bg-[#F7F7F7]"
      dir="rtl"
      lang="ar"
    >
      <div>
        <div className="flex h-16 items-center justify-between px-14 py-10 border">
          <div className="md:flex md:items-center md:gap-12 w-[182px]">
            <a className="block overflow-hidden" href="/">
              <img className="w-[147px] h-[68px]" src={torbahLogo} alt="Logo" />
            </a>
          </div>
          <div className="flex flex-row gap-4 pl-4 text-[#646464] text-[20px]">
            لوحة المعلومات
          </div>
          <div className="flex flex-row gap-4">
            
            <button className="text-[#646464] rounded-xl py-[10px] px-[14px]">
              icon
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
