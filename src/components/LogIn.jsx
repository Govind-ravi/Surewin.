import React, { useState } from "react";
import Pic1 from "../assets/signIn/Pic1.png";
import Image1 from "../assets/signIn/Image1.png";
import Google from "../assets/logos/google.png";
import { FaFacebook } from "react-icons/fa6";
import { MdArrowRightAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate email
    if (name === "email") {
      const emailRegex = /\S+@\S+\.\S+/; // Simple email regex
      setIsEmailValid(emailRegex.test(value));
    }

    // Validate password
    if (name === "password") {
      setIsPasswordValid(value.length >= 5);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmailValid && isPasswordValid) {
      console.log("Form submitted:", formData);
      setFormData({ email: "", password: "" });
      setIsEmailValid(false);
      setIsPasswordValid(false);
    } else {
      alert("Please fill out the form correctly.");
    }
  };

  return (
    <div className="flex gap-16 p-16 h-[calc(100vh-150px)]">
      <div className="relative h-full flex items-center">
        <div className="h-full w-full">
          <img src={Pic1} alt="Raffel" className="block h-full w-auto"/>
        </div>
        <button className="buy-raffel absolute px-8 flex items-center justify-center gap-4 top-10 left-10 bg-orange-btn rounded-3xl text-btn-text font-semibold py-2 transition duration-200">
          Buy Raffle <MdArrowRightAlt size={24} />
        </button>
        <span className="absolute bottom-8 left-8 text-white font-bold text-2xl">
          Surewin.
        </span>
      </div>
      <div className="flex-grow max-w-[500px]">
        <div className="relative text-4xl font-semibold text-nowrap flex gap-8 items-center">
          <span>
            Your Gateway to <br />
            <span className="font-bold">Exciting</span> Prizes !
          </span>
          <div className="w-28">
            <img src={Image1} alt="Winner" className="" />
          </div>
        </div>
        <div className="space-y-4">
          <form
            className="w-full space-y-8 my-8 font-bold"
            onSubmit={handleSubmit}
          >
            <div>
              {" "}
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`block w-full p-2 border-b-2 mb-2
                focus:outline-none 
                ${
                  formData.email === ""
                    ? "border-gray-300"
                    : isEmailValid
                    ? "border-green-500"
                    : "border-red-500"
                } 
                `}
                placeholder="Email Id"
              />
              {!isEmailValid && formData.email !== "" && (
                <p className="text-red-500 text-sm font-normal">
                  Please enter a valid email address.
                </p>
              )}
            </div>
            <div>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className={`block w-full p-2 border-b-2 mb-2
                focus:outline-none 
                ${
                  formData.password === ""
                    ? "border-gray-300"
                    : isPasswordValid
                    ? "border-green-500"
                    : "border-red-500"
                } 
                `}
                placeholder="Password"
              />
              {!isPasswordValid && formData.password !== "" && (
                <p className="text-red-500 text-sm font-normal">
                  Password must be at least 5 characters.
                </p>
              )}
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="w-full bg-dark-gray-btn rounded-3xl text-btn-text font-normal py-2 hover:opacity-80 transition duration-200"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/reset-password")}
                className="w-full border-2 border-dark-gray-btn text-black rounded-3xl font-normal py-2 hover:opacity-80 transition duration-200"
              >
                Forgot Password
              </button>
            </div>
          </form>
          <button className="w-full flex items-center gap-2 justify-center bg-light-gray-btn text-primary-text rounded-3xl font-normal py-2 hover:opacity-80 transition duration-200">
            <img src={Google} alt="(Google)" width={20} /> Login with Gmail
          </button>
          <button className="w-full flex items-center gap-2 justify-center bg-blue-btn rounded-3xl font-normal text-white py-2 hover:opacity-80 transition duration-200">
            <FaFacebook size={20} /> Login with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
