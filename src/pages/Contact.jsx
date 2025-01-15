import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="flex flex-col justify-center items-end">
        <div className="text-end">
          <h1 className="text-4xl mb-8">تواصل معنا عبر</h1>
        </div>
        <div className="w-full flex flex-row justify-center items-center gap-20 my-8 p-4">
          <div className="border bg-white w-[310px] h-[200px] rounded-lg flex flex-col gap-4 justify-center items-center shadow-lg">
            <span className="rounded-full border border-sky-800 p-3 w-[54px] h-[54px] text-center">
              X
            </span>
            <p className="text-2xl text-center text-[#0478C1]">منصة اكس</p>
            <p className="text-center text-[#6C737F]">Torbah</p>
          </div>
          <div className="border bg-white w-[310px] h-[200px] rounded-lg flex flex-col gap-4 justify-center items-center shadow-lg">
            <span className="rounded-full border border-sky-800 p-3 w-[54px] h-[54px] text-center">
              X
            </span>
            <p className="text-2xl text-center text-[#0478C1]">العنوان</p>
            <p className="text-center text-[#6C737F]">المدينة المنورة</p>
          </div>
          <div className="border bg-white w-[310px] h-[200px] rounded-lg flex flex-col gap-4 justify-center items-center shadow-lg">
            <span className="rounded-full border border-sky-800 p-3 w-[54px] h-[54px] text-center">
              X
            </span>
            <p className="text-2xl text-center text-[#0478C1]">
              البريد الإلكتروني
            </p>
            <p className="text-center text-[#6C737F]">torbah.sa@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
