import React from "react";
import { allAchievements } from "../constants";
import torbahLog from "../assets/icons/torbah-logo.svg";

const Achievements = () => {
  return (
      <section className="container min-h-[50vh] mx-auto p-8 overflow-x-hidden mt-8">
        <div className="bg-white rounded-lg shadow-xl p-20">
          <div className="w-full">
            <h1 className="text-center text-[48px] text-[#646464]">
              انجازات تربة
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {allAchievements.map((item) => (
              <div className="flex justify-end gap-2 p-2">
                {item.id == 2 ? <p className="text-right w-2/3">{item.title}</p> : <p className="text-right w-2/3">{item.title}</p>}
                
                <div className="w-[49px] h-full">
                  <img src={torbahLog} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Achievements;
