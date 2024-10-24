import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import Raffle1 from "../../assets/home/Raffel1.png";
import Raffle2 from "../../assets/home/Raffel2.png";
import S1Pic1 from "../../assets/home/S1Pic1.png";
import S1Pic2 from "../../assets/home/S1Pic2.png";
import S1Pic3 from "../../assets/home/S1Pic3.png";
import S1Pic4 from "../../assets/home/S1Pic4.png";
import S1Pic5 from "../../assets/home/S1Pic5.png";

import {
  FaApple,
  FaMotorcycle,
  FaCar,
  FaUser,
  FaHeadphones,
} from "react-icons/fa";
import { SiSamsung, SiOppo, SiSony, SiOneplus, SiLg, SiBoat } from "react-icons/si";

const companiesLogo = [
  { name: "Apple", logo: <FaApple /> },
  { name: "BoAt", logo: <SiBoat color="red" /> },
  { name: "Ather", logo: <FaMotorcycle /> },
  { name: "Chethak", logo: <FaCar /> },
  { name: "Ola", logo: <FaCar /> },
  { name: "Noise", logo: <FaHeadphones /> },
  { name: "BoAt", logo: <SiBoat color="red" /> },
  { name: "Samsung", logo: <SiSamsung /> },
  { name: "Nothing", logo: <FaUser /> },
  { name: "Oppo", logo: <SiOppo /> },
  { name: "Oneplus", logo: <SiOneplus /> },
  { name: "Sony", logo: <SiSony /> },
  { name: "Lg", logo: <SiLg /> },
];

const images = [S1Pic1, S1Pic2, S1Pic3, S1Pic4, S1Pic5];

function Section1() {
  return (
    <>
      <div className="flex items-center justify-between mt-48">
        <div>
          <div className="rotate-[20deg] w-80">
            <img src={Raffle1} alt="" className="rounded-3xl" />
          </div>
        </div>
        <div className="flex flex-col items-center w-3/4">
          <span className="bg-light-gray-btn px-4 py-2 rounded-3xl text-lg">
            🥳-🎁-🎟 Pick a raffle and win - it's that simple.
          </span>
          <div className="text-5xl font-semibold text-center">
            Your Gateway to <span className="font-bold">Exciting</span> Prizes
            and <span className="font-bold">Unforgettable Experiences!</span>
            <p className="text-lg mt-8">
              We believe in the thrill of chance and the joy of winning. Our
              mission is to create unforgettable moments for our participants by
              offering a wide range of exciting prizes, from luxury vacations to
              the latest gadgets.
            </p>
          </div>
          <button className="py-1 px-4 bg-dark-gray-btn text-white rounded-3xl my-2 flex items-center gap-2 mt-4 text-lg">
            Get Started <MdArrowRightAlt size={24} />
          </button>
        </div>
        <div>
          <div className="-rotate-[20deg] w-80">
            <img src={Raffle2} alt="" className="rounded-3xl" />
          </div>
        </div>
      </div>

      {/* Scrolling Logos */}
      <div className="overflow-hidden mt-16 " >
        <div className="scrolling-logos flex gap-8">
          {companiesLogo.map((company, index) => (
            <div
              key={index}
              className="text-dark-gray-btn flex items-center hover:scale-105 transition cursor-pointer"
            >
              {company.logo}
              <span className="ml-1">{company.name}</span>
            </div>
          ))}
          {/* Repeat logos for smooth scrolling */}
          {companiesLogo.map((company, index) => (
            <div
              key={`dup-${index}`}
              className="text-dark-gray-btn flex items-center hover:scale-105 transition cursor-pointer"
            >
              {company.logo}
              <span className="ml-1">{company.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling Images */}
      <div className="overflow-hidden mt-16">
  <div className="scrolling-images flex gap-8 items-end">
    {images.map((image, index) => (
      <div className="flex-shrink-0 max-h-[500px]" key={`dup-${index}`}>
        <img
          src={image}
          alt={`img-dup-${index}`}
          className="h-auto max-h-[500px] w-auto rounded-tr-3xl rounded-tl-3xl"
        />
      </div>
    ))}
    
    {/* Original images */}
    {images.map((image, index) => (
      <div className="flex-shrink-0 max-h-[500px]" key={index}>
        <img
          src={image}
          alt={`img-${index}`}
          className="h-auto max-h-[500px] w-auto rounded-tr-3xl rounded-tl-3xl"
        />
      </div>
    ))}
  </div>
</div>

    </>
  );
}

export default Section1;
