import React, { useState } from "react";
import LogInImg from "../assets/images/logInImg.png";
import torbahLogo from "../assets/icons/Torbah-logo with text-01.svg";
import { Link } from "react-router-dom";
// import LogoInForm from "../components/LogoInForm";

const LogoInForm = () => {
  return (
    <div className="h-full flex flex-col gap-12 items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-center text-4xl">تسجيل الدخول</h1>
        <div className="inline-flex items-center text-center text-base mx-auto flex-row-reverse gap-2">
          <p>ليس لديك حساب ؟</p>
          <button onClick={() => setform("2")} className="text-[#0478c1]">
            سجل
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
        <input
          dir="rtl"
          placeholder="كلمة السر"
          type="text"
          name="name"
          className="w-[465px] p-3 rounded-lg border bg-[#F9F9F9]"
          // value={formData.name}
          // onChange={handleChange}
        />
      </div>
      <div className="flex justify-between w-[465px]">
        <button onClick={() => setform("1")}>هل نسيت كلمة السر؟</button>
        <div>ذكرني</div>
      </div>
      <div>
        <button className="w-[465px] py-4 px-10 bg-[#0478c1] text-white rounded">
          ØªØ³Ø¬ÙŠÙ„ Ø¯Ø®ÙˆÙ„
        </button>
      </div>
    </div>
  );
};

export default function LogIn() {
  const [form, setform] = useState("0");
  return (
    <div className="h-screen w-screen">
      <div className="flex">
        <div className="h-screen w-1/2">
          <img src={LogInImg} className="h-full rounded-r-[8.5rem]" alt="" />
        </div>
        <div className="h-screen w-1/2 flex flex-col justify-around items-center">
          <Link to="/" className="w-[50%] flex justify-end">
            <img className="w-[147px] h-[68px]" src={torbahLogo} alt="Logo" />
          </Link>
          <div className="border rounded-lg shadow-lg w-[569.53px] h-[601px]">
            {form === "0" ? (
              <div className="h-full flex flex-col gap-12 items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <h1 className="text-center text-4xl">تسجيل الدخول</h1>
                  <div className="inline-flex items-center text-center text-base mx-auto flex-row-reverse gap-2">
                    <p>ليس لديك حساب ؟</p>
                    <button
                      onClick={() => setform("1")}
                      className="text-[#0478c1]"
                    >
                      تسجيل
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
                  <input
                    dir="rtl"
                    placeholder="كلمة السر"
                    type="text"
                    name="name"
                    className="w-[465px] p-3 rounded-lg border bg-[#F9F9F9]"
                    // value={formData.name}
                    // onChange={handleChange}
                  />
                </div>
                <div className="flex justify-between w-[465px]">
                  <button onClick={() => setform("2")} className="text-red-600">
                    هل نسيت كلمة السر؟
                  </button>
                  <div>ذكرني</div>
                </div>
                <div>
                  <button className="w-[465px] py-4 px-10 bg-[#0478c1] text-white rounded">
                    تسجيـل الدخـول
                  </button>
                </div>
              </div>
            ) : form === "1" ? (
              <div className="h-full flex flex-col gap-12 items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <h1 className="text-center text-4xl">
                    مرحبا بك في نظام تربة
                  </h1>
                  <div className="inline-flex items-center text-center text-base mx-auto flex-row-reverse gap-2">
                    <p>لديك حساب ؟</p>
                    <button
                      onClick={() => setform("0")}
                      className="text-[#0478c1]"
                    >
                      سجل الدخول
                    </button>{" "}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    dir="rtl"
                    placeholder="الاسم"
                    type="text"
                    name="name"
                    className="w-[465px] p-3 rounded-lg border bg-[#F9F9F9]"
                    // value={formData.name}
                    // onChange={handleChange}
                  />
                  <input
                    dir="rtl"
                    placeholder="البريد الإلكتروني"
                    type="text"
                    name="name"
                    className="w-[465px] p-3 rounded-lg border bg-[#F9F9F9]"
                    // value={formData.name}
                    // onChange={handleChange}
                  />
                  <input
                    dir="rtl"
                    placeholder="رقم الجوال"
                    type="text"
                    name="name"
                    className="w-[465px] p-3 rounded-lg border bg-[#F9F9F9]"
                    // value={formData.name}
                    // onChange={handleChange}
                  />
                  <input
                    dir="rtl"
                    placeholder="كلمة السر"
                    type="text"
                    name="name"
                    className="w-[465px] p-3 rounded-lg border bg-[#F9F9F9]"
                    // value={formData.name}
                    // onChange={handleChange}
                  />
                </div>

                <div>
                  <button className="w-[465px] py-4 px-10 bg-[#0478c1] text-white rounded">
                    تسجيل
                  </button>
                </div>
              </div>
            ) : form === "2" ? (
              <div className="h-full flex flex-col gap-12 items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <h1 className="text-center text-4xl">استعادة كلمة المرور</h1>
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
                <div className="flex justify-end w-[465px]">
                  <button onClick={() => setform("0")}>تراجع</button>
                </div>
                <div>
                  <button className="w-[465px] py-4 px-10 bg-[#0478c1] text-white rounded">
                    ارسال
                  </button>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

//   {/* {form === "1" && (
//     <div className="border flex flex-col gap-4 justify-center items-center w-[569.53px] h-[601.px] p-14">
//       <div>
//         <h1 className="text-center">تسجيل الدخول</h1>
//         <p className="text-center">ليس لديك حساب ؟ سجل </p>
//       </div>
//       <div className="flex flex-col gap-2">
//         <input
//           dir="rtl"
//           placeholder="البريد الإلكتروني"
//           type="text"
//           name="name"
//           className="w-[465px] p-3 rounded-lg border bg-[#F9F9F9]"
//           // value={formData.name}
//           // onChange={handleChange}
//         />
//         <input
//           dir="rtl"
//           placeholder="كلمة السر"
//           type="text"
//           name="name"
//           className="w-[465px] p-3 rounded-lg border bg-[#F9F9F9]"
//           // value={formData.name}
//           // onChange={handleChange}
//         />
//       </div>
//       <div className="flex justify-between w-[465px]">
//         <button onClick={() => setform("1")}>هل نسيت كلمة السر؟</button>
//         <div>ذكرني</div>
//       </div>
//       <div>
//         <button className="w-[465px] py-4 px-10 bg-[#0478c1] text-white rounded">
//           ØªØ³Ø¬ÙŠÙ„ Ø¯Ø®ÙˆÙ„
//         </button>
//       </div>
//     </div>
//   )} */}
