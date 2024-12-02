import React from "react";

export default function LogoInForm() {
  return (
    <div className="h-full flex flex-col gap-12 items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-center text-4xl">مرحبا بك في نظام تربة</h1>
        <div className="inline-flex items-center text-center text-base mx-auto flex-row-reverse gap-2">
          <p>لديك حساب ؟</p>
          <button onClick={() => setform("2")} className="text-[#0478c1]">
            سجل الدخول
          </button>{" "}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <input
          dir="rtl"
          placeholder="البريد الإلكتروني"
          type="text"
          name="name"
          className="w-[465px] p-3 rounded-lg border bg-[#F9F9F9]"
          // value={formData.name}
          // onChange={handleChange}
        />
      </div>
      <div className="flex justify-between w-[465px]">
        <button onClick={() => setform("0")}>هل نسيت كلمة السر؟</button>
        <div>ذكرني</div>
      </div>
      <div>
        <button className="w-[465px] py-4 px-10 bg-[#0478c1] text-white rounded">
          ارسال
        </button>
      </div>
    </div>
  );
}
