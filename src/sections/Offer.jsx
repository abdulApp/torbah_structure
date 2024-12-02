import React from "react";
import SmartFarmImg from "../assets/images/smart-farm.png";
import TorbahLogo from "../assets/icons/torbah-logo.svg";
import WaterLevel from "../assets/icons/water-level-icon.svg";
import Irrigation from "../assets/icons/irrigation-icon.svg";
import Monitor from "../assets/icons/monitor-icon.svg";
import Disease from "../assets/icons/disease2-01 2.svg";
import Prediction from "../assets/icons/prediction-icon.svg";
import Doc from "../assets/icons/doc icon.svg";


const Offer = () => {
  return (
    <section className="bg-[#f8fbfd] min-h-screen mx-auto p-8 overflow-x-hidden mt-8">
      <div className="flex justify-center mb-14 mt-24">
        <h1 className="text-[48px] text-[#0478C1]">الخدمات</h1>
      </div>
      <div className="flex flex-col gap-20">
        <div className="w-full h-[68vh] flex gap-4">
          <div className="flex justify-center items-center w-1/2 h-full">
            <img
              src={SmartFarmImg}
              className="w-[764px] h-[607px] rounded-xl"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-16 items-end w-1/2 h-full px-24 pt-10">
            <div className="inline-flex justify-center items-center gap-4">
              <h1 className="text-5xl text-[#626346]">نظام الري الذكي</h1>
              <img src={TorbahLogo} className="w-[51px] h-[49px]" alt="" />
            </div>
            <div className="inline-flex justify-center items-center gap-4">
              <p className="text-4xl text-[#626346]">المميزات</p>
            </div>
            <div className="w-full flex items-end flex-col gap-8">
              <div className="inline-flex justify-center items-center gap-4">
                <p className="text-3xl text-[#626346]">قياس الرطوبة</p>
                <img src={WaterLevel} className="w-[39.78px] h-[49px]" alt="" />
              </div>
              <div className="inline-flex justify-center items-center gap-4">
                <p className="text-3xl text-[#626346]">الري التلقائي</p>
                <img src={Irrigation} className="w-[39.78px] h-[49px]" alt="" />
              </div>
              <div className="inline-flex justify-center items-center gap-4">
                <p className="text-3xl text-[#626346]">مراقبة صحة النباتات</p>{" "}
                <img src={Monitor} className="w-[39.78px] h-[49px]" alt="" />
              </div>
            </div>
            <div className="flex w-full justify-center items-center pt-4">
              <button className="py-2 px-3 bg-[#0478C1] text-2xl text-white rounded-lg">
                اطلب الخدمة
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-[68vh] flex gap-4">
          <div className="flex flex-col gap-16 items-end w-1/2 h-full px-24 pt-10">
            <div className="inline-flex justify-center items-center gap-4">
              <h1 className="text-5xl text-[#626346]">
                نظام التنبؤ بصحة النبات
              </h1>
              <img src={TorbahLogo} className="w-[51px] h-[49px]" alt="" />
            </div>
            <div className="inline-flex justify-center items-center gap-4">
              <p className="text-4xl text-[#626346]">المميزات</p>
            </div>
            <div className="w-full flex items-end flex-col gap-8">
              <div className="inline-flex justify-center items-center gap-4">
                <p className="text-3xl text-[#626346]">
                  الكشف المبكر عن الآفات
                </p>
                <img src={Disease} className="w-[39.78px] h-[49px]" alt="" />
              </div>
              <div className="inline-flex justify-center items-center gap-4">
                <p className="text-3xl text-[#626346]">التنبؤ بالأمراض</p>
                <img src={Prediction} className="w-[39.78px] h-[49px]" alt="" />
              </div>
              <div className="inline-flex justify-center items-center gap-4">
                <p className="text-3xl text-[#626346]">نتائج فورية</p>{" "}
                <img src={Doc} className="w-[39.78px] h-[49px]" alt="" />
              </div>
            </div>
            <div className="flex w-full justify-center items-center pt-4">
              <button className="py-2 px-3 bg-[#0478C1] text-2xl text-white rounded-lg">
                اشترك
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center w-1/2 h-full">
            <img
              src={SmartFarmImg}
              className="w-[764px] h-[607px] rounded-xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
