import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import Raffle1 from "../../assets/home/Raffel1.png";
import Raffle2 from "../../assets/home/Raffel2.png";
import S4Pic1 from "../../assets/home/S4Pic1.png";
import S4Pic2 from "../../assets/home/S4Pic2.png";
import S4Pic3 from "../../assets/home/S4Pic3.png";

function Section4() {
  return (
    <>
      <div className="mt-8 p-8 flex flex-col items-center relative">
        <div className="w-2/3 text-center">
          <h1 className="text-6xl font-bold">Surewin.</h1>
          <p className="text-lg mb-2">
            “With our combined expertise and passion for celebration, we promise
            to deliver sure win party with exclusive products, that makes your
            winning unforgettable! ”
          </p>
        </div>
        <div className="flex justify-between w-full px-8">
          <div className="w-72 rotate-[20deg] hover:scale-[1.02] transition">
            <img src={Raffle1} alt="" className="rounded-3xl" />
          </div>
          <div className="w-72 -rotate-[20deg] hover:scale-[1.02] transition">
            <img src={Raffle2} alt="" className="rounded-3xl" />
          </div>
        </div>
        <div className="flex w-full justify-evenly my-16 items-center">
          <div className="flex gap-2 items-center">
            <div className="w-52 mx-4 hover:scale-[1.02] transition">
              <img src={Raffle2} alt="" className="rounded-3xl" />
            </div>
            <div className="w-52 hover:scale-[1.02] transition">
              <img src={S4Pic2} alt="" className="rounded-3xl" />
            </div>
          </div>
          <div className="w-72 mx-16 hover:scale-[1.02] transition -rotate-[30deg]">
            <img src={S4Pic1} alt="" className="rounded-3xl" />
          </div>
          <div className="w-64 hover:scale-[1.02] transition">
            <img src={S4Pic3} alt="" className="rounded-3xl" />
          </div>
        </div>
        <button className="flex gap-2 items-center absolute bottom-96 right-72 bg-stone-900 px-4 py-1 text-white rounded-3xl text-lg">
          Buy raffle <MdArrowRightAlt size={12} />
        </button>
        <h1 className="text-dark-gray-btn/50 absolute text-9xl font-bold top-[35%] text-nowrap">
          SUREWIN - PARTY
        </h1>
      </div>
    </>
  );
}

export default Section4;
