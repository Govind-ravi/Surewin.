import React from "react";
import DefaultPic from "../../assets/dashboard/DefaultPic.png";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaGlobe } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate()
  return (
    <div className="flex p-8 gap-16">
      <div className="space-y-8">
        <h2 className="text-4xl text-orange-btn font-bold">Full Name</h2>
        <div className="font-semibold text-dark-gray-btn text-xl">
          <p>
            <MdEmail size={20} className="inline" /> useremailid@gmail.com
          </p>
          <p>
            <FaPhoneAlt size={16} className="inline" />
            +91 1234567890
          </p>
          <p>
            <FaLocationDot size={16} className="inline" /> Street, City, State -
            123456
          </p>
          <p>
            <FaGlobe size={16} className="inline" /> India
          </p>
        </div>
        <button onClick={()=>navigate('/dashboard/edit-profile')}
          className="w-full bg-dark-gray-btn rounded-3xl text-btn-text py-2 hover:opacity-80 transition duration-200"
        >
          Edit Profile
        </button>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="w-96">
          <img src={DefaultPic} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
