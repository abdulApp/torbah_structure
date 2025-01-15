import React from "react";

export default function HealthyPalms() {
  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="flex flex-col justify-center items-end">
        <div className="text-end">
          <h1 className="text-4xl text-[#0478C1] mb-8">التنبؤ بصحة النخيل</h1>
          <p>الرصيد المتوفر: 100 صورة</p>
        </div>
        <div className="w-full flex flex-col justify-center items-end my-8">
          <div className="flex flex-row-reverse justify-center items-center">
            <button className="w-[320px] h-[49px] bg-[#0478C1] text-white text-base font-normal py-2 px-4 rounded-tl-md rounded-tr-md">
              رفع الصورة
            </button>
            <button className="w-[320px] h-[49px] bg-[#FBFEFF] text-[#0478C1] text-base font-normal py-2 px-4 border border-[#0478C1] rounded-tl-md rounded-tr-md">
              رفع الصورة
            </button>
          </div>
          <div className="w-full h-full bg-white border rounded-lg">
            <div className="flex flex-row gap-16 p-12">
              <div className="w-full text-end text-2xl">النتيجة</div>
              <div className="w-full">
                <div className="w-full h-[580px] border"></div>
                <button className="w-full h-[49px] bg-[#0478C1] text-white text-base font-normal py-2 px-4 rounded-md mt-3">رفع صورة اخرى</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
