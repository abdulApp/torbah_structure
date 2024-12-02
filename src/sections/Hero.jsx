import React from "react";
import heroBg from "../assets/images/heroBg.jpg";

const Hero = () => {
  return (
      <section
        id="home"
        className="relative h-screen mt-[80px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-[#1F7DBE45] bg-opacity-30 shadow-2xl"></div>
        <div className="flex justify-end pr-[85px] items-center h-[90%] w-full relative z-10 text-white text-4xl font-bold">
          <div className="text-right">
            <h1
              className="text-white font-normal"
              style={{ fontSize: "64px", lineHeight: "79.69px" }}
            >
              ابدأ رحلتك نحو زراعة ذكية
            </h1>
            <p
              className="text-white font-normal"
              style={{ fontSize: "30px", lineHeight: "37.35px" }}
            >
              تربة يمنحك نظام ري ذكي مبتكر يدعم تحسين الإنتاجية وتقليل استهلاك
              الموارد
            </p>
          </div>
        </div>
      </section>
  );
};

export default Hero;
