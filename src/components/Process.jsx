import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { IoCaretDown } from "react-icons/io5";
import Raffle1 from "../assets/home/Raffel1.png";
import Raffle2 from "../assets/home/Raffel2.png";
import Rect1 from "../assets/process/Rect1.png";
import Rect2 from "../assets/process/Rect2.png";
import Pic1 from "../assets/process/Pic1.png";
import Pic2 from "../assets/process/Pic2.png";
import Pic3 from "../assets/process/Pic3.png";
import Pic4 from "../assets/process/Pic4.png";
import S2Ellipse1 from "../assets/home/S2Ellipse1.png";
import S2Ellipse2 from "../assets/home/S2Ellipse2.png";
import S2Ellipse3 from "../assets/home/S2Ellipse3.png";
import S2Ellipse4 from "../assets/home/S2Ellipse4.png";

const processes = [
  { a: "Choose Raffel", b: "Buy Tickets" },
  { a: "Enter the draw", b: "Wait for the Results" },
  { a: "Congrats in advance", b: "Repeat" },
];

function Process() {
  return (
    <main className="p-8 w-full h-full relative">
      <div className="flex flex-col items-center text-3xl font-[400]">
        <p>
          We make waves of fun & Joy for your next{" "}
          <span className="font-bold">WIN</span>
        </p>
        <p>we work on soiree santuary, dive into the season’s</p>
        <p className="flex items-center">
          Hottest deals and unforgettable{" "}
          <span className="font-bold">WINS</span>!
          <span className="bg-light-gray-btn px-4 py-1 rounded-3xl text-lg">
            🎁 Sure Chances of winning 🎟{" "}
          </span>
        </p>
        <button className="mt-2 text-xl bg-dark-gray-btn text-btn-text px-6 py-1 rounded-3xl flex items-center justify-center gap-2 hover:bg-opacity-90 transition">
          Buy Raffle <MdArrowRightAlt size={32} />
        </button>
      </div>
      <div className="flex flex-col items-center mt-16 gap-4 w-[40%] mx-auto">
        {processes.map((process, i) => (
          <>
            <div className="flex items-center justify-center relative self-start uppercase  text-nowrap">
              <span className="px-8 py-2 rounded-3xl bg-orange-btn text-btn-text text-xl font-semibold z-10">
                {process.a}
              </span>
              <span className="-m-4">
                <img src={Rect1} alt="" className="h-5" />
              </span>
              <span className="border-[8px] border-orange-btn bg-white rounded-full z-10">
                <IoCaretDown size={30} className="m-1" />
              </span>
              {process.a === "Congrats in advance" && (
                <div className="w-24">
                  <img src={Pic3} alt="" />
                </div>
              )}
            </div>
            <div className="flex flex-row-reverse items-center justify-center relative self-end uppercase text-nowrap">
              <span className="px-8 py-2 rounded-3xl bg-blue-btn text-btn-text text-xl font-semibold z-10">
                {process.b}
              </span>
              <span className="-m-4">
                <img src={Rect2} alt="" className="h-5" />
              </span>
              <span className="border-[8px] border-blue-btn bg-white rounded-full z-10">
                <IoCaretDown size={30} className="m-1" />
              </span>
              {process.b === "Repeat" && (
                <div className="w-24 mr-4">
                  <img src={Pic4} alt="" />
                </div>
              )}
            </div>
          </>
        ))}
        <button className="mt-2 text-2xl w-full bg-dark-gray-btn text-btn-text px-6 py-1 rounded-3xl flex items-center justify-center gap-2 hover:bg-opacity-90 transition">
          BUY A RAFFEL <MdArrowRightAlt size={32} />
        </button>
        <div className="w-40 absolute right-[15%] bottom-10">
          <img src={Pic2} alt="" />
        </div>
      </div>
      <div className="absolute top-56 left-40">
        <div className="relative">
          <span className="font-semibold text-2xl">
            BECOME A <br /> WINNER
          </span>
          <div className="w-32 absolute -top-10 left-[80%]">
            <img src={Pic1} alt="" />
          </div>
        </div>
      </div>
      <div className="absolute w-44 h-32 bg-gray-400 bottom-32 transform left-32 -rotate-[30deg] rounded-lg  hover:scale-[1.02] transition">
        <div className="flex relative">
          <div className="absolute top-4 w-10 left-5">
            <img src={S2Ellipse1} alt="" />
          </div>
          <div className="absolute top-4 w-10 left-10">
            <img src={S2Ellipse2} alt="" />
          </div>
          <div className="absolute top-4 w-10 left-[3.75rem]">
            <img src={S2Ellipse3} alt="" />
          </div>
          <div className="absolute top-4 w-10 left-[5rem]">
            <img src={S2Ellipse4} alt="" />
          </div>
        </div>
        <p className="text-sm absolute top-12 left-5 flex flex-col items-start mt-2">
          Be among 1000’s of lucky winners{" "}
          <button className="text-xs">Buy now</button>
        </p>
      </div>
      <div className="absolute top-1/2 transform -translate-y-20 left-10 w-48 rotate-[30deg]">
        <img src={Raffle1} alt="" className=" rounded-3xl" />
      </div>
      <div className="absolute top-1/2 transform -translate-y-40 right-10 w-48 -rotate-[20deg]">
        <img src={Raffle2} alt="" className=" rounded-3xl" />
      </div>
    </main>
  );
}

export default Process;
