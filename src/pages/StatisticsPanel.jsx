import React from "react";
import VitaminsRatio from "../components/VitaminsRatio";
import GrowthRate from "../components/GrowthRate";

export default function StatisticsPanel() {
  return (
    <div className="min-h-screen pt-6 px-6">
      <div className="flex flex-col justify-center items-end">
        <div className="w-full flex flex-row justify-center items-center gap-20 my-8 p-4">
          <div className="border bg-white w-[310px] h-[200px] rounded-lg flex flex-col gap-4 justify-center items-center shadow-lg">
            <span className="rounded-full border border-sky-800 p-3 w-[54px] h-[54px] text-center">
              X
            </span>
            <p className="text-2xl text-center text-[#0478C1]">
              الاشتراكات النشطة
            </p>
            <p className="text-center text-[#6C737F]">20</p>
          </div>
          <div className="border bg-white w-[310px] h-[200px] rounded-lg flex flex-col gap-4 justify-center items-center shadow-lg">
            <span className="rounded-full border border-sky-800 p-3 w-[54px] h-[54px] text-center">
              X
            </span>
            <p className="text-2xl text-center text-[#0478C1]">الإرادات</p>
            <p className="text-center text-[#6C737F]">200 RS</p>
          </div>

          <div className="border bg-white w-[310px] h-[200px] rounded-lg flex flex-col gap-4 justify-center items-center shadow-lg">
            <span className="rounded-full border border-sky-800 p-3 w-[54px] h-[54px] text-center">
              X
            </span>
            <p className="text-2xl text-center text-[#0478C1]">عدد الطلبات</p>
            <p className="text-center text-[#6C737F]">13</p>
          </div>
          <div className="border bg-white w-[310px] h-[200px] rounded-lg flex flex-col gap-4 justify-center items-center shadow-lg">
            <span className="rounded-full border border-sky-800 p-3 w-[54px] h-[54px] text-center">
              X
            </span>
            <p className="text-2xl text-center text-[#0478C1]">
              عدد المستخدمين
            </p>
            <p className="text-center text-[#6C737F]">20</p>
          </div>
        </div>
      </div>

      <div className="w-full flex gap-4">
        <div className="w-1/2 flex flex-col gap-3 justify-center items-center px-3 py-6 border rounded-lg bg-white">
          <h1 className="text-center text-xl text-black font-normal">
            نسبة الفيتامينات
          </h1>
          <VitaminsRatio />
        </div>
        <div className="w-1/2 flex flex-col gap-3 justify-center items-center px-3 py-6 border rounded-lg bg-white">
          <h1 className="text-center text-xl text-black font-normal">
            نسبة الفيتامينات
          </h1>
          <VitaminsRatio />
        </div>
      </div>
    </div>
  );
}
