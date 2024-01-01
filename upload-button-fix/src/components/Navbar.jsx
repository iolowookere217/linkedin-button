import React from "react";
import { BsLinkedin, BsSearch, BsFillGrid3X3GapFill } from "react-icons/bs";
import { AiFillHome, AiOutlineMessage } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { MdWork } from "react-icons/md";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-white w-full h-16 flex justify-center items-center text-sm text-gray-600 pl-6">
      <div className="flex item items-center ">
        <BsLinkedin className="h-10 w-10 mr-6" color="#0a66c2" />

        <div className="h-10 items-center bg-gray-100 pl-4 rounded-[4px] hidden lg:inline-flex">
          <BsSearch className="h-4 w-4 " />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-gray-300 w-72  h-[32px] pl-4 text-[16px] focus:outline-none"
          />
        </div>
      </div>
      <div className="flex w-[740px] space-x-10 hover:cursor-pointer">
        <div className="flex-col items-center md:inline-flex lg:hidden">
          <BsSearch className="h-[26px] w-[26px]" />
          <h3 className="hidden md:inline-flex">Search</h3>
        </div>
        <div className="flex flex-col items-center">
          <AiFillHome className="h-[26px] w-[26px]" />
          <h3 className="hidden md:inline-flex">Home</h3>
        </div>
        <div className="flex flex-col items-center">
          <FiUsers className="h-[26px] w-[26px]" />
          <h3 className="hidden md:inline-flex">Network</h3>
        </div>
        <div className="flex flex-col items-center">
          <MdWork className="h-[26px] w-[26px]" />
          <h3 className="hidden md:inline-flex">Jobs</h3>
        </div>
        <div className="flex flex-col items-center">
          <AiOutlineMessage className="h-[26px] w-[26px]" />
          <h3 className="hidden md:inline-flex">Messaging</h3>
        </div>
        <div className="flex flex-col items-center">
          <FaBell className="h-[26px] w-[26px]" />
          <h3 className="hidden md:inline-flex">Notifications</h3>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://media.licdn.com/dms/image/D4D35AQHgOmqoZyXyfA/profile-framedphoto-shrink_100_100/0/1676384583413?e=1704690000&v=beta&t=nEiqK4sUNwDKRE3ybuUScNGHR-RS4rCBjruXPc6-4Qw"
            alt="profile image"
            className="h-[26px] w-[26px] rounded-full"
          />
          <h3 className="hidden md:inline-flex">Me</h3>
        </div>
        <div className="flex flex-col items-center">
          <BsFillGrid3X3GapFill className="h-[26px] w-[26px]" />
          <h3 className="hidden md:inline-flex">More</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
