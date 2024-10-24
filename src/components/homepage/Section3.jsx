import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import S1Pic3 from "../../assets/home/S1Pic3.png";
import S1Pic4 from "../../assets/home/S1Pic4.png";
import S2Ellipse1 from "../../assets/home/S2Ellipse1.png";
import S2Ellipse2 from "../../assets/home/S2Ellipse2.png";
import S2Ellipse3 from "../../assets/home/S2Ellipse3.png";
import S2Ellipse4 from "../../assets/home/S2Ellipse4.png";

function Section3() {
  return (
    <div className="mt-8 flex p-16 justify-between items-center">
      <div className="w-1/3 space-y-2">
        <h1 className="text-3xl">
          Together, Let’s make this{" "}
          <span className="font-bold">winning season</span> be{" "}
          <span className="font-bold">unforgettable</span> ! with ultimate{" "}
          <span className="font-bold">SUREWIN</span> party experience!
        </h1>
        <p className="text-">
          With the wide range of products, lets make your life a more better
          place by winning, just dont trust your luck, calculate your winning
          chances -
        </p>
        <button className="flex gap-2 items-center bg-stone-900 px-4 py-1 text-white rounded-3xl">
          Buy raffle <MdArrowRightAlt size={18} />
        </button>
      </div>
      <div className="w-1/2">
        <div className="w-full rounded-lg bg-stone-900 h-full pl-16 relative">
          <div className="flex p-8 w-full gap-8 items-end">
            <div className=" relative hover:scale-[1.02] transition">
              <img src={S1Pic3} alt="" className="rounded-xl" />
              <button className="flex gap-2 text-xs items-center absolute bottom-2 right-2 bg-stone-900 px-2 py-1 text-white rounded-3xl">
                Buy raffle <MdArrowRightAlt size={16} />
              </button>
            </div>
            <div className=" relative hover:scale-[1.02] transition">
              <img src={S1Pic4} alt="" className="rounded-xl"/>
              <button className="flex gap-2 text-xs items-center absolute bottom-10 right-2 bg-stone-900 px-2 py-1 text-white rounded-3xl">
                Buy raffle <MdArrowRightAlt size={16} />
              </button>
            </div>
          </div>
          <button className="p-4 text-white hover:underline">View all</button>
          <div className="absolute w-44 h-32 bg-gray-400 top-1/2 transform -translate-y-1/2 -translate-x-1/2 -left-0 rounded-lg  hover:scale-[1.02] transition">
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
        </div>
      </div>
    </div>
  );
}

export default Section3;
