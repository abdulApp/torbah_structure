import React from "react";

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
      <h1 className="text-right text-2xl font-normal">
        الحالة الصحية العامة للنباتات
      </h1>
      <div className="w-full flex gap-3">
        <div className="w-1/3 flex flex-col gap-3 justify-center items-center px-3 py-6 border rounded-lg bg-white">
          <div className="w-full flex justify-between">
            <p>آخر 7 أيام</p>
            <p>نسبة المعادن في التربة</p>
          </div>
        </div>
        <div className="w-2/3 flex flex-col gap-3 justify-center items-center px-3 py-6 border rounded-lg bg-white">
          <div className="w-full flex justify-between">
            <p>آخر 7 أيام</p>
            <p>نسبة المعادن في التربة</p>
          </div>
        </div>
      </div>
    </div>
  );
}
