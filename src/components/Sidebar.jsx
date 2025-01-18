import React, { useState } from "react";
import { Link } from "react-router-dom";
import SmartFarmImg from "../assets/images/smart-farm.png";
import TorbahLogo from "../assets/icons/torbah-logo.svg";
import WaterLevel from "../assets/icons/water-level-icon.svg";
import Irrigation from "../assets/icons/irrigation-icon.svg";
import BlackIrrigation from "../assets/icons/Black-irrigation-icon.png";
import BlackNotification from "../assets/icons/black_notifications.svg";
import blackPhone from "../assets/icons/black_phone.svg";
import blackHelp from "../assets/icons/black_help.svg";
import Monitor from "../assets/icons/monitor-icon.svg";
import Disease from "../assets/icons/disease2-01 2.svg";
import Prediction from "../assets/icons/prediction-icon.svg";
import Doc from "../assets/icons/doc icon.svg";
import Person from "../assets/icons/person.svg";
import BlackPerson from "../assets/icons/black_person.svg";

export default function Sidebar() {
  const [btn, setBtn] = React.useState("Irrigation");

  return (
    <div className="w-[20%] h-[92vh] mt-[5rem] z-40 fixed top-0 right-0 ">
      <div className="h-full w-full">
        <div className="flex flex-col gap-8 h-[75%] pt-16 text-2xl font-normal text-right">
          {btn === "Irrigation" ? (
            <>
              <div className="text-[#0478C1] bg-[#D6E4F0] h-[48px] w-full flex gap-2 justify-end items-center">
                <div className="pr-4 inline-flex items-center gap-2">
                  الري الذكي{" "}
                  <span>
                    <img src={Irrigation} className="w-8 h-8" />
                  </span>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="hover:border-b-2 border-sky-800 hover:text-sky-300 hover:bg-sky-500 h-[48px] w-full flex gap-2 justify-end items-center"
              >
                <button onClick={() => setBtn("Irrigation")}>
                  <div className="pr-4 inline-flex items-center gap-2">
                    الري الذكي{" "}
                    <span>
                      <img src={BlackIrrigation} className="w-8 h-8" />
                    </span>
                  </div>
                </button>
              </Link>
            </>
          )}
          {btn === "healthy-palms" ? (
            <>
              <div className="text-[#0478C1] bg-[#D6E4F0] h-[48px] w-full flex gap-2 justify-end items-center">
                <div className="pr-4 inline-flex items-center gap-2">
                  التنبؤ بصحة النخيل
                  <span>
                    <img src={Prediction} className="w-8 h-8" />
                  </span>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/healthy-palms"
                className="hover:text-sky-300 hover:bg-sky-600 h-[48px] flex justify-end items-center"
              >
                <button onClick={() => setBtn("healthy-palms")}>
                  <div className="pr-4 inline-flex items-center gap-2">
                    التنبؤ بصحة النخيل
                    <span>
                      <img src={Prediction} className="w-8 h-8" />
                    </span>
                  </div>
                </button>
              </Link>
            </>
          )}
          {btn === "notification" ? (
            <>
              <div className="hover:text-sky-300 hover:bg-sky-600 h-[48px] flex justify-end items-center">
                <div className="pr-4 inline-flex items-center gap-2">
                  التنبيهات
                  <span>
                    <img src={BlackNotification} className="w-8 h-8" />
                  </span>
                </div>
              </div>
            </>
          ) : (
            <>
              <button onClick={() => setBtn("notification")}>
                <Link
                  to="/alerts"
                  className="hover:text-sky-300 hover:bg-sky-600 h-[48px] flex justify-end items-center"
                >
                  <div className="pr-4 inline-flex items-center gap-2">
                    التنبيهات
                    <span>
                      <img src={BlackNotification} className="w-8 h-8" />
                    </span>
                  </div>
                </Link>
              </button>
            </>
          )}
          {}
          <Link
            to="/contact"
            className="hover:text-sky-300 hover:bg-sky-600 h-[48px] flex justify-end items-center"
          >
            <div className="pr-4 inline-flex items-center gap-2">
              تواصل معنا
              <span>
                <img src={blackPhone} className="w-8 h-8" />
              </span>
            </div>
          </Link>
          <Link
            to="/support"
            className="hover:text-sky-300 hover:bg-sky-600 h-[48px] flex justify-end items-center"
          >
            <div className="pr-4 inline-flex items-center gap-2">
              الدعم والمساعدة
              <span>
                <img src={blackHelp} className="w-8 h-8" />
              </span>
            </div>
          </Link>
          <Link
            to="/profile"
            className="hover:text-sky-300 hover:bg-sky-600 h-[48px] flex justify-end items-center"
          >
            <div className="pr-4 inline-flex items-center gap-2">
              الملف الشخصي{" "}
              <span>
                <img src={BlackPerson} className="w-8 h-8" />
              </span>
            </div>
          </Link>
        </div>
        <div className="px-4 flex flex-col gap-12 justify-center items-center border-t w-[80%] mx-auto">
          <Link to="/logout" className=" text-sm font-normal pt-4">
            تسجيل الخروج
          </Link>
        </div>
      </div>
    </div>
  );
}
