import React, { useState } from "react";
import Modal from "react-modal";
import EditorModal from "./EditorModal";

import {
  FaPlusCircle,
  FaTrash,
  FaClone,
  FaTimes,
  FaImage,
} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const PostModal = ({ isOpen, closeModal }) => {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const [showHoverModal, setShowHoverModal] = useState(false);
  const [showAddMediaHover, setShowAddMediaHover] = useState(false);
  const [showDuplicateHover, setShowDuplicateHover] = useState(false);
  const [showUploadMore, setShowUploadMore] = useState(false);
  const [showEditorModal, setShowEditorModal] = useState(false);
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleImageChange = (e) => {
    const fileList = e.target.files;
    const newImages = Array.from(fileList);
    setImages((prevImages) => [...prevImages, ...newImages]);
    setShowEditorModal(true);
    // Show "Upload More Images" button when images are present
    setShowUploadMore(true);
  };

  const deleteImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const duplicateImages = () => {
    const duplicatedImages = [...images, ...images];
    setImages(duplicatedImages);
  };

  const handlePost = () => {
    console.log("Posted:", text, images);
    closeModal();
  };

  const isPostButtonDisabled = text === "" && images.length === 0;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        content: {
          width: "70%",
          height: "70%",
          maxHeight: "600px",
          maxWidth: "600px",
          margin: "auto",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          border: "none",
          padding: "20px",
          backgroundColor: "#fff",
        },
      }}
    >
      <div className="flex justify-between items-center">
        <div className="flex item items-center gap-2 justify-center py-2  hover:bg-gray-200 rounded-md px-2 ">
          <img
            src="https://media.licdn.com/dms/image/D4D35AQHgOmqoZyXyfA/profile-framedphoto-shrink_400_400/0/1676384583413?e=1701446400&v=beta&t=AKS2x0Gyl9KqhFCoWaExVNXW38h-3wmijo4sPN6k2w0"
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
        <button onClick={closeModal} className="absolute top-0 right-0 p-2">
          <FaTimes />
        </button>
      </div>
      <div>
        {showEditorModal && (
          <EditorModal
            isOpen={showEditorModal}
            closeModal={() => setShowEditorModal(false)}
            images={images}
          />
        )}
        <textarea
          placeholder="What do you want to talk about?"
          value={text}
          className="w-full h-48 resize-none focus:outline-none rounded-md p-2 overflow-hidden"
          onChange={handleTextChange}
        />
        <div className="flex flex-wrap gap-4 mt-4">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={URL.createObjectURL(image)}
                alt={`img-${index}`}
                className="max-w-32 h-auto"
              />
              <button
                onClick={() => deleteImage(index)}
                className="absolute top-0 right-0 bg-white rounded-full p-1"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <label
            htmlFor="upload-image"
            className="cursor-pointer block text-center"
            onMouseEnter={() => setShowHoverModal(true)}
            onMouseLeave={() => setShowHoverModal(false)}
          >
            <FaImage className=" flex text-2xl justify-start" />
          </label>
          <input
            id="upload-image"
            type="file"
            multiple
            className="hidden"
            onChange={handleImageChange}
          />
          {showHoverModal && (
            <div className="absolute top-0 -left-5 text-sm rounded-lg bg-white p-1 shadow-md -mt-10 border border-1">
              <p>Add media</p>
            </div>
          )}
        </div>
        <div className="flex justify-between">
          <div className="relative">
            <label
              htmlFor="additional-images"
              className="flex items-center cursor-pointer"
            >
              <FaPlusCircle
                className="mr-1 text-2xl"
                onMouseEnter={() => setShowAddMediaHover(true)}
                onMouseLeave={() => setShowAddMediaHover(false)}
              />
              {showAddMediaHover && (
                <div className="absolute top-0 left-0 bg-white p-1 shadow-md -mt-10 border rounded-lg text-sm">
                  Add
                </div>
              )}
            </label>
            <input
              id="additional-images"
              type="file"
              multiple
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
          <div className="relative">
            <button
              onClick={duplicateImages}
              className="flex items-center cursor-pointer"
            >
              <FaClone
                className="mr-1 text-2xl"
                onMouseEnter={() => setShowDuplicateHover(true)}
                onMouseLeave={() => setShowDuplicateHover(false)}
              />
              {showDuplicateHover && (
                <div className="absolute top-0 left-0 bg-white p-1 shadow-md -mt-10 border rounded-lg text-sm">
                  Duplicate
                </div>
              )}
            </button>
          </div>
          <button
            onClick={handlePost}
            disabled={isPostButtonDisabled}
            className={`text-[#fff] rounded-2xl px-4 py-2 text-sm ${
              isPostButtonDisabled
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#0a66c2] cursor-pointer hover:bg-[#004182]"
            }`}
          >
            Post
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default PostModal;
