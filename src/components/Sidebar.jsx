import React from "react";
import { Link } from "react-router-dom";
import SmartFarmImg from "../assets/images/smart-farm.png";
import TorbahLogo from "../assets/icons/torbah-logo.svg";
import WaterLevel from "../assets/icons/water-level-icon.svg";
import Irrigation from "../assets/icons/irrigation-icon.svg";
import Monitor from "../assets/icons/monitor-icon.svg";
import Disease from "../assets/icons/disease2-01 2.svg";
import Prediction from "../assets/icons/prediction-icon.svg";
import Doc from "../assets/icons/doc icon.svg";

export default function Sidebar() {
  return (
    <div className="w-[20%] h-[92vh] mt-[5rem] z-40 fixed top-0 right-0 ">
      <div className="h-full w-full">
        <div className="flex flex-col gap-8 h-[75%] pt-16 text-2xl font-normal text-right">
          <Link
            to="/smart-irrigation"
            className="hover:border-b-2 border-sky-800 hover:text-sky-300 hover:bg-sky-500 h-[48px] w-full flex gap-2 justify-end items-center"
          >
            <div className="pr-4 inline-flex items-center gap-2">
              الري الذكي{" "}
              <span>
                <img src={Irrigation} className="w-8 h-8" />
              </span>
            </div>
          </Link>
          <Link to="/healthy-palms" className="hover:text-sky-300 hover:bg-sky-600 h-[48px] flex justify-end items-center">
            <div className="pr-4 inline-flex items-center gap-2">
              {" "}
              التنبؤ بصحة النخيل
              <span>
                <img src={Prediction} className="w-8 h-8" />
              </span>
            </div>
          </Link>
          <Link to="/alerts" className="hover:text-sky-300 hover:bg-sky-600 h-[48px] flex justify-end items-center">
            <div className="pr-4">
              التنبيهات
              <span>icon</span>
            </div>
          </Link>
          <Link to="/contact" className="hover:text-sky-300 hover:bg-sky-600 h-[48px] flex justify-end items-center">
            <div className="pr-4">
              تواصل معنا
              <span>icon</span>
            </div>
          </Link>
          <Link to="/support" className="hover:text-sky-300 hover:bg-sky-600 h-[48px] flex justify-end items-center">
            <div className="pr-4">
              الدعم والمساعدة
              <span>icon</span>
            </div>
          </Link>
          <Link to="/profile" className="hover:text-sky-300 hover:bg-sky-600 h-[48px] flex justify-end items-center">
            <div className="pr-4 inline-flex items-center gap-2">
              الملف الشخصي
              <span>icon</span>
            </div>
          </Link>
        </div>
        <div className="px-4 flex flex-col gap-12 justify-center items-center">
          <hr className="h-3" />
          <Link to="/logout" className=" text-sm font-normal">
            تسجيل الخروج
          </Link>
        </div>
      </div>
    </div>
  );
}
