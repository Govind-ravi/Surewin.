import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { HiArrowLongUp } from "react-icons/hi2";
import S2Pic1 from "../../assets/home/S2Pic1.png";
import S2Pic2 from "../../assets/home/S2Pic2.png";
import S2Pic3 from "../../assets/home/S2Pic3.png";

function Section2() {
  return (
    <div className="mt-24">
      <div className="mt-8 flex flex-col items-center text-3xl font-semibold">
        <p>
          We make waves of fun & Joy for your next{" "}
          <span className="font-bold">WIN</span>
        </p>
        <p>we work on soiree santuary, dive into the season’s</p>
        <div className="flex items-center">
          <p>
            Hottest deals and unforgettable{" "}
            <span className="font-bold">WINS!</span>
          </p>
          <span className="bg-gray-200 px-2 py-1 rounded-3xl text-sm">
            🎁 100% Chances of winning 🎟
          </span>
        </div>
      </div>
      <div className="mt-16 mx-8 py-8 flex gap-12 items-center">
        <div className="w-1/4  hover:scale-[1.01] transition self-start">
          <img className="w-full rounded-3xl" src={S2Pic1} alt="" />
          <h1 className="text-2xl font-bold">Crazy Deals</h1>
          <p className="">
            Exclusive products at dream price, with 100% chances to win. Best
            deals at prices that doesn't pinch.
          </p>
        </div>
        <div className="w-[10%] aspect-square hover:scale-105 transition rounded-full border-black border-2 flex flex-col items-center justify-center relative">
          <HiArrowLongUp className=" transform rotate-45" size={50} />
          <span className="text-lg font-semibold">View all</span>
        </div>
        <div className="w-1/4  hover:scale-[1.01] transition">
          <img
            className="w-full  rounded-3xl"
            width={150}
            src={S2Pic2}
            alt=""
          />
          <h1 className="text-2xl font-bold">Sure Winner!</h1>
          <p className="">
            With the assured limited raffles per draw, there will be a sure
            winner among 100 members. In big wins, sure winner among 50 players.
          </p>
        </div>
        <div className="w-[40%] relative  hover:scale-[1.01] transition">
          <img src={S2Pic3} alt="" className=" rounded-3xl" />
          <button className="flex gap-2 items-center absolute bottom-2 right-2 bg-stone-900 px-2 py-1 text-white rounded-3xl">
            Buy raffle <MdArrowRightAlt size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section2;
