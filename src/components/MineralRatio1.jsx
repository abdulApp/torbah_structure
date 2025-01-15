import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    id: 1,
    name: "البوتاسيوم",
    percentValues: 70,
  },
  {
    id: 2,
    name: "الفسفور",
    percentValues: 40,
  },
  {
    id: 3,
    name: "النيتروجين",
    percentValues: 60,
  },
  {
    id: 4,
    name: "المغنيسيوم",
    percentValues: 80,
  },
];

const MineralRatio = () => {
  return (
    <div className="progress-bar p-1 rounded-md" dir="rtl">
      <div className="progress-bar-list grid gap-5">
        {data?.map((progressbar) => {
          return (
            <div className="progress-bar-item" key={progressbar.id}>
              <div className="bar-item-info flex items-center justify-between gap-1 mb-0">
                <p className="bar-item-info-name">{progressbar.name}</p>
                <p className="bar-item-info-value">
                  {progressbar.percentValues}
                </p>
              </div>
              <div className="bar-item-full w-full h-2 rounded-[100vh] relative">
                <div
                  className="bar-item-filled absolute top-0 right-0 h-full rounded-[100vh] bg-[#0478C1]"
                  style={{
                    width: `${progressbar.percentValues}%`,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MineralRatio;
