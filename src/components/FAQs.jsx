import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import RaffelCard from "./RaffelCard";
import Raffle1 from "../assets/home/Raffel1.png";
import Raffle2 from "../assets/home/Raffel2.png";

const Raffels = [
  { _id: 1, name: "iPhone", tokensSold: 23, price: 399, picture: Raffle1 },
  { _id: 1, name: "Airpods", tokensSold: 40, price: 789, picture: Raffle2 },
  { _id: 1, name: "iPhone", tokensSold: 23, price: 399, picture: Raffle1 },
  { _id: 1, name: "Airpods", tokensSold: 40, price: 789, picture: Raffle2 },
];

const questionAndAnswers = [
  {
    question: "01. How to buy raffle?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "02. How many raffles can one user buy?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "03. How will the draw be done?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "04. When will the results be announced?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "05. Can we request or suggest product for raffle?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "06. Will my data be safe?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="px-16">
      <div className="flex flex-col items-center text-3xl font-[400]">
        <p>Do you have any questions? - we have the answer </p>
        <p>Some of the Frequently Asked Questions - </p>
        <p className="flex items-center">
          other queries mail to support@surewin.io{" "}
          <span className="bg-light-gray-btn px-4 py-1 rounded-3xl text-lg">
            🎁 Sure Chances of winning 🎟
          </span>
        </p>
      </div>
      <div className="my-16 w-[80%] mx-auto text-2xl">
        <hr className="h-[2px] bg-dark-gray-btn w-full my-4" />
        {questionAndAnswers.map((questionAndAns, i) => (
          <div key={i}>
            <span
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleAnswer(i)}
            >
              <p>{questionAndAns.question}</p>
              <span className="text-xl mr-2">
                {openIndex === i ? <IoMdClose /> : <FaPlus />}
              </span>
            </span>
            <div
              className={`bg-light-gray-btn rounded transition-all duration-200 ease-in-out overflow-hidden ${
                openIndex === i ? "max-h-[200px]" : "max-h-0"
              }`}
            >
              <p
                className={`my-2 p-2 ${
                  openIndex === i ? "opacity-100" : "opacity-0"
                }`}
              >
                {questionAndAns.answer}
              </p>
            </div>
            <hr className="h-[0.15rem] bg-dark-gray-btn w-full my-4" />
          </div>
        ))}
      </div>
      <div className="flex gap-8 my-8">
        {Raffels.map((raffel, i) => (
          <RaffelCard key={i} raffel={raffel} />
        ))}
      </div>
    </main>
  );
}

export default FAQs;
