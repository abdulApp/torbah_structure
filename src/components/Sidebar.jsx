import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-[20%] h-[92vh] mt-[5rem] z-40 fixed top-0 right-0 ">
      <div className="h-full w-full">
        <div className="flex flex-col gap-8 h-[75%] pt-16 text-2xl font-normal text-right">
          <Link to="/smart-irrigation" className="hover:text-sky-300 hover:bg-sky-600">
            <div className="pr-4">
              الري الذكي
              {" "}<span>icon</span>
            </div>
          </Link>
          <Link className="hover:text-sky-300 hover:bg-sky-600 h-[48px] flex justify-end items-center">
            <div className="pr-4">
              <span>icon</span> الري الذكي
            </div>
          </Link>
          <Link className="hover:text-sky-300 hover:bg-sky-600 h-[48px] flex justify-end items-center">
            <div className="pr-4">
              <span>icon</span> الري الذكي
            </div>
          </Link>
          <Link className="hover:text-sky-300 hover:bg-sky-600 h-[48px] flex justify-end items-center">
            <div className="pr-4">
              <span>icon</span> الري الذكي
            </div>
          </Link>
          <Link className="hover:text-sky-300 hover:bg-sky-600 h-[48px] flex justify-end items-center">
            <div className="pr-4">
              <span>icon</span> الري الذكي
            </div>
          </Link>
          <Link className="hover:text-sky-300 hover:bg-sky-600 h-[48px] flex justify-end items-center">
            <div className="pr-4">
              <span>icon</span> الري الذكي
            </div>
          </Link>
        </div>
      </div>
      <p>side bar</p>
      <Link to="/login">login</Link>
    </div>
  );
}
