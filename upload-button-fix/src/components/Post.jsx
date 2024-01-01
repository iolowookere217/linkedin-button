import { MdWork } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegImage } from "react-icons/fa6";
import { PiNotebookBold } from "react-icons/pi";
import React, { useState } from "react";
import PostModal from "./PostModal"; // Import your modal component

const Post = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="bg-white w-[36rem] h-32 flex flex-col items-center  text-sm text-gray-600  px-16 rounded-[.5rem] ">
      <div className="flex item items-center gap-2 justify-center py-2  hover:bg-gray-200 rounded-md px-2">
        <img
          src="https://media.licdn.com/dms/image/D4D35AQHgOmqoZyXyfA/profile-framedphoto-shrink_200_200/0/1676384583413?e=1702242000&v=beta&t=eJzQjIXDl9EP3MAzyAJ3oWvQjlQqRnaydCr3OuZtVFY"
          alt="profile image"
          className="h-[3.5rem] w-[3.5rem] rounded-full hover:cursor-pointer"
        />
        <div className=" items-center justify-start  hidden lg:inline-flex ">
          <div>
            <h2 className="font-bold text-lg ">ISAAC OLOWOOKERE</h2>
            <h4 className="font-thin text-sm">Post to Anyone</h4>
          </div>
        </div>
        <IoMdArrowDropdown />
      </div>
    </div>
  );
};

export default Post;
