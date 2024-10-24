import React from "react";
import RaffelCard from "./RaffelCard";
import Raffle1 from "../assets/home/Raffel1.png";
import Raffle2 from "../assets/home/Raffel2.png";
import { FaChevronDown } from "react-icons/fa";

function Raffels() {
  const Raffels = [
    { _id: 1, name: "iPhone", tokensSold: 23, price: 399, picture: Raffle1 },
    { _id: 1, name: "Airpods", tokensSold: 40, price: 789, picture: Raffle2 },
    { _id: 1, name: "iPhone", tokensSold: 23, price: 399, picture: Raffle1 },
    { _id: 1, name: "Airpods", tokensSold: 40, price: 789, picture: Raffle2 },
    { _id: 1, name: "iPhone", tokensSold: 23, price: 399, picture: Raffle1 },
    { _id: 1, name: "Airpods", tokensSold: 40, price: 789, picture: Raffle2 },
    { _id: 1, name: "iPhone", tokensSold: 23, price: 399, picture: Raffle1 },
    { _id: 1, name: "Airpods", tokensSold: 40, price: 789, picture: Raffle2 },
    { _id: 1, name: "iPhone", tokensSold: 23, price: 399, picture: Raffle1 },
    { _id: 1, name: "Airpods", tokensSold: 40, price: 789, picture: Raffle2 },
    { _id: 1, name: "iPhone", tokensSold: 23, price: 399, picture: Raffle1 },
    { _id: 1, name: "Airpods", tokensSold: 40, price: 789, picture: Raffle2 },
    { _id: 1, name: "iPhone", tokensSold: 23, price: 399, picture: Raffle1 },
    { _id: 1, name: "Airpods", tokensSold: 40, price: 789, picture: Raffle2 },
    { _id: 1, name: "iPhone", tokensSold: 23, price: 399, picture: Raffle1 },
    { _id: 1, name: "Airpods", tokensSold: 40, price: 789, picture: Raffle2 },
    { _id: 1, name: "iPhone", tokensSold: 23, price: 399, picture: Raffle1 },
    { _id: 1, name: "Airpods", tokensSold: 40, price: 789, picture: Raffle2 },
  ];

  return (
    <div className="py-2 px-16">
      <div className="flex gap-16 font-medium text-lg text-nowrap">
        <button className="px-4 py-2 bg-light-gray-btn rounded-3xl flex items-center gap-2">Categories <FaChevronDown/></button>
        <button className="px-4 py-2 bg-light-gray-btn rounded-3xl flex items-center gap-2">Price Range <FaChevronDown/></button>
        <button className="px-4 py-2 bg-light-gray-btn rounded-3xl flex items-center gap-2">Raffel Type <FaChevronDown/></button>
        <button className="px-4 py-2 bg-light-gray-btn rounded-3xl flex items-center gap-2">SureWin Party <FaChevronDown/></button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-8">
        {Raffels.map((raffel, i) => (
          <RaffelCard key={i} raffel={raffel} />
        ))}
      </div>
    </div>
  );
}

export default Raffels;
