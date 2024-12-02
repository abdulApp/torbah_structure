import React from "react";
import contactBg from "../assets/images/contactBg.jpg";
import ContactForm from "../components/ContactForm";
import igSocial from "../assets/icons/IG-Social Icons.svg";
import inSocial from "../assets/icons/in-Social Icons.svg";
import xSocial from "../assets/icons/x-Social Icons.svg";
import location_on from "../assets/icons/location_on.svg";
import message_icon from "../assets/icons/message_icon.svg";

const Contact = () => {
  return (
    <section
      id="home"
      className="relative h-screen mt-[80px] bg-cover bg-center"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      {/* Background overlay with blur */}
      <div
        className="absolute inset-0 bg-cover bg-center w-screen"
        style={{ backgroundImage: `url(${contactBg})`, filter: "blur(10px)" }}
      ></div>

      {/* Content wrapper */}
      <div className="relative h-full w-[80%] mx-auto pt-10">
        <div className="bg-white bg-opacity-70 w-full h-[90%] rounded-xl flex items-center text-right relative">
          <div className="w-[55%]  p-4">
            <ContactForm />
          </div>
          <div className="w-[45%] p-4">
            <div className="h-[90%] flex flex-col justify-center">
              <h1 className="text-[34px] text-[#646464]">
                هل أنت مهتم؟
                <br /> لا تتردد في التواصل معنا
              </h1>
              <div className=" inline-flex justify-end gap-2 text-[#646464]">
                <p className="text-[20px] text-[#646464]">
                  torbah.sa@gmail.com
                </p>
                <img src={message_icon} alt="" className=" size-9" />
              </div>
              <div className=" inline-flex justify-end gap-2 text-[#646464]">
                <p>المدينة المنورة</p>
                <img src={location_on} alt="" className=" size-9" />
              </div>
            </div>
            <div className="flex justify-end items-center gap-2 mt-4">
              <img src={inSocial} alt="" />
              <img src={xSocial} alt="" />
              <img src={igSocial} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
