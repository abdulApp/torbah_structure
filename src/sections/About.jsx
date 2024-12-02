import React from "react";
import torbahLog from "../assets/icons/torbah-logo.svg";

const About = () => {
  return (
    <section className="h-[75vh] w-full relative">
      {/* Background blurred div with lower z-index */}
      <div
        className="w-10/12 h-[70vh] bg-white bg-opacity-40 shadow-lg mx-auto absolute inset-0 bg-cover bg-center top-[-40px] z-10"
        // style={{ filter: "blur(5px)" }}
      ></div>

      {/* Foreground content with higher z-index */}
      <div className="flex flex-col w-[70%] justify-center items-center mx-auto z-20 relative py-10 gap-12">
        <h1 className="text-[32px] text-[#1F222B] text-center">عن نظام تربة</h1>
        <p className="text-[16px] text-[#1f222b] w-[708px] text-center">
          نظام ري ذكي مبتكر يدعم تحسين الإنتاجية وتقليل استهلاك الموارد. بتقنيات
          دقيقة، يحدد تربة احتياجات النباتات للماء ويقيس رطوبة التربة لتحديد
          التوقيت المثالي للري. ابدأ رحلتك نحو زراعة ذكية ً واستفد من المحاصيل
          الوفيرة بكفاءة. اختبر تربة اليوم واحصد غدا بنجاح
        </p>
        <div className="w-full text-center mx-auto text-[#1F222B]">
          <h1 className="text-4xl mb-4">حلول تربة</h1>
          <div className="w-[583px] h-[71] mx-auto flex justify-around">
            <div className="flex items-center justify-center gap-2">
              <p className=" text-right">نظام التنبؤ بصحة النبات</p>
              <div className="w-[49px] h-full">
                <img src={torbahLog} alt="" />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className=" text-right">نظام الري الذكي</p>
              <div className="w-[49px] h-full">
                <img src={torbahLog} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
