import React, { useState } from "react";

export default function HealthyPalms() {
  const [image, setImage] = useState(true);
  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="flex flex-col justify-center items-end">
        <div className="text-end">
          <h1 className="text-4xl text-[#0478C1] mb-8">التنبؤ بصحة النخيل</h1>
          <p>الرصيد المتوفر: 100 صورة</p>
        </div>
        <div className="w-full flex flex-col justify-center items-end my-8">
          <div className="flex flex-row-reverse justify-center items-center">
            <button
              className={
                image
                  ? `w-[320px] h-[49px] bg-[#0478C1] text-white text-base font-normal py-2 px-4 rounded-tl-md rounded-tr-md`
                  : `w-[320px] h-[49px] bg-[#FBFEFF] text-[#0478C1] text-base font-normal py-2 px-4 border border-[#0478C1] rounded-tl-md rounded-tr-md`
              }
              onClick={() => setImage(image ? false : true)}
            >
              رفع الصورة
            </button>
            <button
              className={
                image
                  ? `w-[320px] h-[49px] bg-[#FBFEFF] text-[#0478C1] text-base font-normal py-2 px-4 border border-[#0478C1] rounded-tl-md rounded-tr-md`
                  : `w-[320px] h-[49px] bg-[#0478C1] text-white text-base font-normal py-2 px-4 rounded-tl-md rounded-tr-md`
              }
              onClick={() => setImage(image ? false : true)}
            >
              التحليلات السابقة
            </button>
          </div>
          {image ? (
            <>
              <div className="w-full h-full bg-white border rounded-lg">
                <div className="flex flex-row gap-16 p-12">
                  <div className="w-full text-end text-2xl">النتيجة</div>
                  <div className="w-full">
                    <div className="w-full h-[580px] border"></div>
                    <button className="w-full h-[49px] bg-[#0478C1] text-white text-base font-normal py-2 px-4 rounded-md mt-3">
                      رفع صورة اخرى
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-full pb-10">
                <div className="w-full flex flex-col gap-3 justify-center items-center px-3 py-6 border rounded-lg bg-white">
                  <div className="h-full w-full flex justify-between">
                    <p>التفاصيل</p>
                    <p>الحالة</p>
                    <p>تاريخ التحليل</p>
                    <p>الصورة</p>
                  </div>
                  <hr className="w-full" />
                  <div className="h-full w-full flex justify-between">
                    <p dir="rtl">
                      المرض الأول-1
                      <br />
                      وصف للمرض ونصائح
                      <br />
                      المرض الثاني-2
                      <br />
                      وصف للمرض ونصائح
                      <br />
                    </p>
                    <p>مصابة</p>
                    <p>2024/11/22</p>
                    <p>2edd58fd</p>
                  </div>
                  <hr className="w-full" />
                  <div className="h-full w-full flex justify-between">
                    <p dir="rtl"> استمر بالعناية بها</p>
                    <p>سليمة</p>
                    <p>2024/11/22</p>
                    <p>2edd58fd</p>
                  </div>
                  <hr className="w-full" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
