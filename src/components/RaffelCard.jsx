import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { IoHeart } from "react-icons/io5";

function RaffelCard({ raffel }) {
  return (
    <div className="w-auto space-y-4 hover:scale-[1.02] transition">
      <div className="w-auto h-48 overflow-hidden">
        <img
          src={raffel.picture}
          alt=""
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div>
        <p className="flex items-center justify-between">
          <span className="text-2xl font-semibold">{raffel.name}</span>
          <span className="text-2xl font-bold">{raffel.tokensSold}/100</span>
        </p>
        <p className="text-3xl font-bold text-orange-btn">
          Rs {raffel.price.toFixed(2)} / raffel
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <button className="flex-grow text-2xl bg-dark-gray-btn text-btn-text px-6 py-1 rounded-3xl flex items-center justify-center gap-2 hover:bg-opacity-90 transition h-12">
          Buy Raffle <MdArrowRightAlt size={32} />
        </button>
        <span className="cursor-pointer border-[3px] border-dark-gray-btn p-1 bg-[#e04f5f] flex items-center justify-center rounded-full h-12 w-12">
          <IoHeart size={40} color="white" />
        </span>
      </div>
    </div>
  );
}

export default RaffelCard;
