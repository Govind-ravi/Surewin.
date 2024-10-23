import React, { useState } from "react";
import DefaultPic from "../../assets/dashboard/DefaultPic.png"; // Placeholder for the profile picture
import { useNavigate } from "react-router-dom";
import { FaPen } from "react-icons/fa";

function EditProfile() {
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    country: "",
  });
  const [profilePic, setProfilePic] = useState(DefaultPic); // Initialize with default picture
  const [isUploaded, setIsUploaded] = useState(false);

  // Handle input change for main form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input change for profile picture
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setProfilePic(fileURL); // Set the preview of the uploaded image
      setIsUploaded(true); // Set upload status to true
    }
  };

  // Handle form submission for main details
  const handleSubmitDetails = (e) => {
    e.preventDefault();
    console.log("Profile details updated:", formData);
    // Add functionality to handle form submission, e.g., API call
  };

  // Handle form submission for profile picture
  const handleSubmitPicture = (e) => {
    e.preventDefault();
    console.log("Profile picture updated");
    // Add functionality to handle profile picture submission, e.g., API call
  };

  return (
    <div className="flex gap-16 p-8 items-center h-[calc(100vh-150px)]">
      {/* Right Side - Main Details Form */}
      <div className="flex-grow max-w-[500px]">
        <h2 className="text-2xl font-semibold mb-4">Edit Your Details</h2>
        <form className="w-full space-y-4" onSubmit={handleSubmitDetails}>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="block w-full p-2 border-b-2 focus:outline-none border-gray-300"
            placeholder="Full Name"
          />
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="block w-full p-2 border-b-2 focus:outline-none border-gray-300"
            placeholder="Email Id"
          />
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
            className="block w-full p-2 border-b-2 focus:outline-none border-gray-300"
            placeholder="Phone Number"
          />
          <input
            type="text"
            id="address"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            className="block w-full p-2 border-b-2 focus:outline-none border-gray-300"
            placeholder="Address"
          />
          <input
            type="text"
            id="country"
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            className="block w-full p-2 border-b-2 focus:outline-none border-gray-300"
            placeholder="Country"
          />
          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="w-full bg-dark-gray-btn rounded-3xl text-btn-text py-2 hover:opacity-80 transition duration-200"
            >
              Save Changes
            </button>
            <button
              onClick={() => navigate("/dashboard/profile")}
              className="w-full bg-orange-btn rounded-3xl text-btn-text font-normal py-2 hover:opacity-80 transition duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      {/* Left Side - Profile Picture Upload */}
      <div className="flex flex-col items-center">
      <div className="relative w-[200px]">
        <img
          src={profilePic} // Replace with a default image path
          alt="Profile"
          className="mb-4"
        />
        <label htmlFor="profile-pic-upload" className="absolute bottom-0 left-1/2 translate-x-[-50%] flex gap-2 items-center px-4 py-1 bg-light-gray-btn rounded-2xl">
          Upload <FaPen className="inline" size={15}/>
        </label>
        <input
          id="profile-pic-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden" // Hide the default input
        />
      </div>
      {isUploaded && <p className="text-green-500 mt-2">Profile Picture Uploaded Succesfuly!</p>}
    </div>
    </div>
  );
}

export default EditProfile;
