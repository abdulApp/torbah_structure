import React from "react";
import HumidityLevels from "../components/HumidityLevels";
import MineralRatio from "../components/MineralRatio";

export default function SmartIrrigation() {
  return (
    <div className="w-full h-full flex flex-col gap-8 px-6 py-8">
      {/* top section */}
      <div className="w-full flex gap-4">
        <div className="w-1/4 flex flex-col gap-3 justify-center items-center px-3 py-6 border rounded-lg bg-white">
          <p className="text-base font-normal text-[#6C737F]">
            سرعة واتجاه الرياح <span>icon</span>
          </p>
          <h1 className="text-center text-xl text-black font-normal">
            {" "}
            10 كم/ساعة -️ شرقية <br />
            (E)
          </h1>
        </div>
        <div className="w-1/4 flex flex-col gap-3 justify-center items-center px-3 py-6 border rounded-lg bg-white">
          <p className="text-base font-normal text-[#6C737F]">
            سرعة واتجاه الرياح <span>icon</span>
          </p>
          <h1 className="text-center text-xl text-black font-normal">
            {" "}
            10 كم/ساعة -️ شرقية <br />
            (E)
          </h1>
        </div>
        <div className="w-1/4 flex flex-col gap-3 justify-center items-center px-3 py-6 border rounded-lg bg-white">
          <p className="text-base font-normal text-[#6C737F]">
            سرعة واتجاه الرياح <span>icon</span>
          </p>
          <h1 className="text-center text-xl text-black font-normal">
            {" "}
            10 كم/ساعة -️ شرقية <br />
            (E)
          </h1>
        </div>
        <div className="w-1/4 flex flex-col gap-3 justify-center items-center px-3 py-6 border rounded-lg bg-white">
          <p className="text-base font-normal text-[#6C737F]">
            سرعة واتجاه الرياح <span>icon</span>
          </p>
          <h1 className="text-center text-xl text-black font-normal">
            {" "}
            10 كم/ساعة -️ شرقية <br />
            (E)
          </h1>
        </div>
      </div>
      {/* middle section */}
      <h1 className="text-right text-2xl font-normal">
        الحالة الصحية العامة للنباتات
      </h1>
      <div className="w-full flex gap-3">
        <div className="w-1/3 flex flex-col gap-3 justify-center items-center px-3 py-6 border rounded-lg bg-white">
          <div className="w-full flex justify-between">
            <p>آخر 7 أيام</p>
            <p>نسبة المعادن في التربة</p>
          </div>
          <div className="h-full w-full">
            <MineralRatio />
          </div>
        </div>
        <div className="w-2/3 h-[287px] flex flex-col gap-3 justify-center items-center px-3 py-6 border rounded-lg bg-white">
          <div className="w-full flex items-center justify-between">
            <button className="border-2 p-3 rounded-xl">PDF تحميل</button>
            <ul className="flex gap-4 items-center">
              <li className="inline-flex gap-2 flex-row-reverse">اخر 30 يوم</li>
              <li className="inline-flex gap-2 flex-row-reverse">اخر 7 ايام</li>
              <li className="inline-flex gap-2 flex-row-reverse">
                <span>12</span>
                {" - "}
                مساء
                <span>12</span>
                صباح
              </li>
              <li className="inline-flex gap-2 flex-row-reverse bg-[#0478C1] py-2 px-3 rounded-xl text-white">
                <span>12</span>
                {" - "}
                صباح
                <span>12</span>
                مساء
              </li>
            </ul>
            <p>مستويات الرطوبة</p>
          </div>
          {/* <HumidityLevels /> */}
          <HumidityLevels />
          {/* <AreaChartComponent /> */}
        </div>
      </div>
      {/* bottom section */}

      <div className="w-full flex gap-4">
        <div className="w-1/3 flex flex-col gap-3 justify-center items-center px-3 py-6 border rounded-lg bg-white">
          <h1 className="text-center text-xl text-black font-normal">
            نسبة الفيتامينات
          </h1>
        </div>
        <div className="w-1/3 flex flex-col gap-3 justify-center items-center px-3 py-6 border rounded-lg bg-white">
          <h1 className="text-center text-xl text-black font-normal">
            الحالة العامة للنباتات
          </h1>
        </div>
        <div className="w-1/3 flex flex-col gap-3 justify-center items-center px-3 py-6 border rounded-lg bg-white">
          <h1 className="text-center text-xl text-black font-normal">
            نسبة النمو
          </h1>
        </div>
      </div>
    </div>
  );
}
