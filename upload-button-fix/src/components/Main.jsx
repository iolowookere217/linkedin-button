import { MdWork } from "react-icons/md";
import { FaRegImage } from "react-icons/fa6";
import { PiNotebookBold } from "react-icons/pi";
import React, { useState } from "react";
import PostModal from "./PostModal"; // Import your modal component
import EditorModal from "./EditorModal";

const Main = () => {
  const [showPostModal, setShowPostModal] = useState(false);
  const [showEditorModal, setShowEditorModal] = useState(false);
  const [images, setImages] = useState([]);

  const openPostModal = () => {
    setShowPostModal(true);
  };

  const closePostModal = () => {
    setShowPostModal(false);
  };

  const openEditorModal = () => {
    setShowEditorModal(true);
  };

  const closeEditorModal = () => {
    setShowEditorModal(false);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="bg-background h-screen flex justify-center p-6">
      <div className="bg-white w-[36rem] h-32 flex flex-col items-center  text-sm text-gray-600  px-16 rounded-[.5rem] ">
        <div className="flex item items-center gap-2 justify-center w-full py-2 ">
          <img
            src="https://media.licdn.com/dms/image/D4D35AQHgOmqoZyXyfA/profile-framedphoto-shrink_400_400/0/1676384583413?e=1701446400&v=beta&t=AKS2x0Gyl9KqhFCoWaExVNXW38h-3wmijo4sPN6k2w0"
            alt="profile image"
            className="h-[3.5rem] w-[3.5rem] rounded-full hover:cursor-pointer"
          />
          <div className="h-12 items-center justify-start bg-transparent border border-1 rounded-[4rem] hidden lg:inline-flex hover:bg-gray-200 ">
            <button
              onClick={openPostModal}
              className="bg-transparent text-gray-600 w-[30rem] h-[32px] pl-4 text-[14px] focus:outline-none hover:cursor-pointer flex justify-start items-center"
            >
              Start a post
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex rounded-md  h-12 gap-2 items-center  hover:bg-gray-200 px-2 hover:cursor-pointer">
            <FaRegImage className="h-[26px] w-[26px] text-[#378fe9]" />
            <h3 className="hidden md:inline-flex">Media</h3>
          </div>
          <div className="flex rounded-md  h-12 gap-2 items-center  hover:bg-gray-200 px-2 hover:cursor-pointer">
            <MdWork className="h-[26px]  w-[26px] text-[#a871ea]" />
            <h3 className="hidden md:inline-flex">Job</h3>
          </div>
          <div className="flex rounded-md  h-12 gap-2 items-center  hover:bg-gray-200 px-2 hover:cursor-pointer">
            <PiNotebookBold className="h-[26px] w-[26px] text-[#e06847]" />
            <h3 className="hidden md:inline-flex">Write article</h3>
          </div>
        </div>
      </div>
      <PostModal
        isOpen={showPostModal}
        closeModal={closePostModal}
        openEditorModal={openEditorModal} // Pass function to open EditorModal
        setImages={setImages} // Pass function to update images from PostModal
      />
      <EditorModal
        isOpen={showEditorModal}
        closeModal={closeEditorModal}
        images={images}
        setImages={setImages} // Pass function to update images from EditorModal
      />
    </div>
  );
};

export default Main;
