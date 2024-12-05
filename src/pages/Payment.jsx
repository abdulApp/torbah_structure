import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Payment() {
  const [pages, setPages] = useState("plans");
  const PaymentForm = () => {
    return (
      <div className="h-[84.5vh] w-screen bg-[#D9D9D9] flex flex-col justify-center items-center gap-8">
        <h1 className="text-center text-4xl font-normal">الدفع</h1>
        <div className="w-[644px] h-[188px] bg-white py-8 px-8">
          <div className="inline-flex w-full justify-between items-center mb-4">
            <button
              className="text-[#0478c1] underline"
              onClick={() => setPages("plans")}
            >
              تغيير الخطة
            </button>
            <h1>ملخص الطلب</h1>
          </div>
          <hr className="w-[567px] bg-[#B5B3B4E5] mb-7" />
          <div className="inline-flex w-full justify-between items-center mb-4">
            <div className="inline-flex justify-center items-center gap-2">
              <p>ريال</p>
              <p>250</p>
            </div>
            <h1>اسم الخطة</h1>
          </div>
        </div>
        <div className="w-[644px] bg-white py-8 px-8">
          <div className="inline-flex w-full justify-end items-center mb-4">
            <h1>تفاصيل الدفع</h1>
          </div>
          <hr className="w-[567px] bg-[#B5B3B4E5] mb-7" />
          <form action="">
            <div className="flex flex-col w-full gap-2 p-0">
              <label
                htmlFor="cardNumber"
                className="flex flex-col justify-center items-end gap-2"
              >
                <p>رقم البطاقة</p>
                <input
                  type="text"
                  name="cardNumber"
                  id="cardNumber"
                  className="w-full h-[48px] border border-[#B5B3B4E5] rounded-lg"
                />
              </label>
              <div className="flex flex-row gap-2 w-full">
                <label
                  htmlFor="expiryDate"
                  className="flex flex-col justify-center items-end gap-2 w-1/2"
                >
                  <p>تاريخ الانتهاء</p>
                  <input
                    type="text"
                    name="expiryDate"
                    id="expiryDate"
                    className="w-full h-[48px] border border-[#B5B3B4E5] rounded-lg"
                  />
                </label>
                <label
                  htmlFor="cvv"
                  className="flex flex-col justify-center items-end gap-2 w-1/2"
                >
                  <p>رقم التحقق</p>
                  <input
                    type="text"
                    name="cvv"
                    id="cvv"
                    className="w-full h-[48px] border border-[#B5B3B4E5] rounded-lg"
                  />
                </label>
              </div>
              <label
                htmlFor="cardName"
                className="flex flex-col justify-center items-end gap-2"
              >
                <p>اسم صاحب البطاقة</p>
                <input
                  type="text"
                  name="cardName"
                  id="cardName"
                  className="w-full h-[48px] border border-[#B5B3B4E5] rounded-lg"
                />
              </label>
            </div>
            <div className="w-full mx-auto">
              <button className="w-full mx-auto border rounded-xl bg-[#047BC1] py-3 px-4 text-xl text-white mt-4">
                دفع
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  return (
    <>
      <Navbar />
      <div className="mt-20">
        {pages === "plans" ? (
          <div className="h-[84.5vh] w-screen bg-[#D9D9D9] flex flex-col justify-center items-center gap-16">
            <h1 className="text-center text-4xl font-normal">
              خطط الاشتراك
              <br />
              في خدمة التنبؤ بأمراض النبات
            </h1>
            <div className="w-full flex flex-row justify-center gap-16">
              <div className="w-[320px] h-[353px] flex flex-col justify-around items-center gap-0 border border-[#0478c1] rounded-2xl bg-[#B1D5EC]">
                <p className="text-[#3391CC] text-2xl font-bold">اسم الخطة</p>
                <p className=" text-xl">عدد الصور: 1500 صورة</p>
                <div className=" text-3xl inline-flex items-center gap-2">
                  <p>ريال</p>
                  <p>600</p>
                </div>
                <button
                  onClick={() => setPages("payment")}
                  className="border rounded-xl bg-[#047BC1] w-[250px] py-3 px-4 text-xl text-white"
                >
                  شراء
                </button>
              </div>
              <div className="w-[320px] h-[353px] flex flex-col justify-around items-center gap-0 border border-[#0478c1] rounded-2xl bg-[#B1D5EC]">
                <p className="text-[#3391CC] text-2xl font-bold">اسم الخطة</p>
                <p className=" text-xl">عدد الصور: 1500 صورة</p>
                <div className=" text-3xl inline-flex items-center gap-2">
                  <p>ريال</p>
                  <p>600</p>
                </div>
                <button
                  onClick={() => setPages("payment")}
                  className="border rounded-xl bg-[#047BC1] w-[250px] py-3 px-4 text-xl text-white"
                >
                  شراء
                </button>
              </div>
              <div className="w-[320px] h-[353px] flex flex-col justify-around items-center gap-0 border border-[#0478c1] rounded-2xl bg-[#B1D5EC]">
                <p className="text-[#3391CC] text-2xl font-bold">اسم الخطة</p>
                <p className=" text-xl">عدد الصور: 1500 صورة</p>
                <div className=" text-3xl inline-flex items-center gap-2">
                  <p>ريال</p>
                  <p>600</p>
                </div>
                <button
                  onClick={() => setPages("payment")}
                  className="border rounded-xl bg-[#047BC1] w-[250px] py-3 px-4 text-xl text-white"
                >
                  شراء
                </button>
              </div>
            </div>
          </div>
        ) : pages === "payment" ? (
          <PaymentForm />
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </>
  );
}
