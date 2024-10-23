import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer
      data-aos="zoom-in"
      className="flex p-8 bg-stone-800 text-white justify-between items-center"
    >
      <div className="w-1/4 space-y-2">
        <h1 className="text-3xl font-bold">Surewin.</h1>
        <p className="text-sm">
          “With our combined expertise and passion for celebration, that makes
          your winning unforgettable! ”
        </p>
      </div>
      <div>
        <ul>
          <li className="hover:underline">About</li>
          <li className="hover:underline">Raffle</li>
          <li className="hover:underline">Big Wins</li>
          <li className="hover:underline">SureWin</li>
          <li className="hover:underline">Party</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/policy/privacy" className="hover:underline">
              Privacy Policy
            </NavLink>
          </li>
          <li>
            <NavLink to="/policy/refund" className="hover:underline">
              Refund Policy
            </NavLink>
          </li>
          <li>
            <NavLink to="/policy/cookie" className="hover:underline">
              Cookie Policy
            </NavLink>
          </li>
          <li>
            <NavLink to="/policy/credit-card" className="hover:underline">
              Credit Card
            </NavLink>
          </li>
          <li>
            <NavLink to="/policy/debit-card" className="hover:underline">
              Debit Card
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <div className="flex gap-2 items-center">
          <FaInstagram />
          <FaFacebook />
          <div className="flex items-center">
            <FaYoutube />
            Youtube
          </div>
        </div>
        <button className="flex gap-2 items-center bg-stone-900 px-2 py-1 text-white rounded-3xl">
          Buy raffle <MdArrowRightAlt size={24} />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
