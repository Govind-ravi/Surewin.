import React, { useState } from "react";
import Pic1 from "../../assets/resetPassword/Pic1.png";
import { useNavigate } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";

function ResetPassword() {
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({ email: "" });
  const [isEmailValid, setIsEmailValid] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate email
    const emailRegex = /\S+@\S+\.\S+/; // Simple email regex
    setIsEmailValid(emailRegex.test(value));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmailValid) {
      console.log("Reset link sent to:", formData.email);
      setFormData({ email: "" });
      setIsEmailValid(false);
      navigate("/login");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="flex gap-16 p-16 h-[calc(100vh-150px)]">
      <div className="relative h-full flex items-center">
        <div className="h-full w-full">
          <img src={Pic1} alt="Raffel" className="block h-full w-auto" />
        </div>
        <button className="buy-raffel absolute px-8 flex items-center justify-center gap-4 top-10 left-10 bg-orange-btn rounded-3xl text-btn-text font-semibold py-2 transition duration-200">
          Buy Raffle <MdArrowRightAlt size={24} />
        </button>
        <span className="absolute bottom-8 left-8 text-white font-bold text-2xl">
          Surewin.
        </span>
      </div>
      <div className="flex-grow max-w-[500px] flex flex-col justify-center">
        <div className="relative text-4xl font-semibold text-nowrap flex gap-8 items-center">
          <span>FORGOT PASSWORD?</span>
        </div>
        <div className="space-y-4">
          <form
            className="w-full space-y-8 my-8 font-bold"
            onSubmit={handleSubmit}
          >
            <div>
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
              <button
                type="submit"
                className="w-full text-black border-2 border-dark-gray-btn rounded-3xl font-normal py-2 hover:opacity-80 transition duration-200"
              >
                Send Reset Link
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
