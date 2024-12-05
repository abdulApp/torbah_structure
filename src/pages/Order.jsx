import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Order() {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <div className="h-[84.5vh] pt-4">
          <div className="flex flex-col gap-24 items-center border rounded-lg shadow-lg mx-auto w-[95%] h-[80vh] px-8 py-14">
            <div className="flex flex-row gap-4">
              <button>طلباتي الحاليه</button>
              <button>طلباتي الحاليه</button>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-[1750px] h-[64px] text-2xl font-normal border flex flex-row justify-around items-center">
                <p>تاريخ الشراء</p>
                <p>رقم الطلب</p>
                <p>الخدمة</p>
              </div>
              <div className="w-[1750px] h-[64px] text-xl border flex flex-row justify-around items-center">
                <p>2024/05/5</p>
                <p>#5465</p>
                <p>ري ذكي</p>
              </div>
              <div className="w-[1750px] h-[64px] text-xl border flex flex-row justify-around items-center">
                <p>2024/05/5</p>
                <p>#5465</p>
                <p>ري ذكي</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
