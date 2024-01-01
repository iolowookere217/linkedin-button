import React, { useState } from "react";
import Modal from "react-modal";
import EditorModal from "./EditorModal";
import { v4 as uuidv4 } from "uuid";
import {
  FaPlusCircle,
  FaTrash,
  FaClone,
  FaTimes,
  FaImage,
  FaEdit,
  FaTimesCircle,
} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const PostModal = ({ isOpen, closeModal, setImages, images }) => {
  const [text, setText] = useState("");
  const [showHoverModal, setShowHoverModal] = useState(false);
  const [showAddMediaHover, setShowAddMediaHover] = useState(false);
  const [showDuplicateHover, setShowDuplicateHover] = useState(false);
  const [showUploadMore, setShowUploadMore] = useState(false);
  const [showEditorModal, setShowEditorModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const clearImages = () => {
    setImages([]);
  };

  const handleImageChange = (e) => {
    const fileList = e.target.files;
    const newImageFiles = Array.from(fileList);
    const newImages = [...images, ...newImageFiles];

    newImages.map((n) => {
      n.id = uuidv4();
    });

    setImages(newImages);
    newImages.length && setSelectedImageIndex(newImages.length - 1);
    setShowEditorModal(true);
    setShowUploadMore(true);
  };
  // const handleImageChange = (e) => {
  //   const fileList = e.target.files;
  //   const newImageFiles = Array.from(fileList);
  //   const newImages = [...images, ...newImageFiles];
  //   setImages(newImages);
  //   newImages.length && setSelectedImageIndex(newImages.length - 1);
  // };
  const deleteImage = (id) => {
    const updatedImages = [...images];
    updatedImages.splice(id, 1);
    setImages(updatedImages);
  };

  const resetEditor = () => {
    setText(""); // Clear the text input
    setImages([]); // Clear the images array
  };

  const handlePost = () => {
    console.log("Posted:", text, images);
    closeModal();
  };

  const isPostButtonDisabled = text === "" && images?.length === 0;

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
            src="https://media.licdn.com/dms/image/D4D35AQHgOmqoZyXyfA/profile-framedphoto-shrink_100_100/0/1676384583413?e=1704690000&v=beta&t=nEiqK4sUNwDKRE3ybuUScNGHR-RS4rCBjruXPc6-4Qw"
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
            setImages={setImages}
            resetEditor={resetEditor}
            setSelectedImageIndex={setSelectedImageIndex}
            selectedImageIndex={selectedImageIndex}
          />
        )}
        <textarea
          placeholder="What do you want to talk about?"
          value={text}
          className="w-full h-[14rem] resize-none focus:outline-none rounded-md p-2 overflow-hidden"
          onChange={handleTextChange}
        />
        <div>
          <div className="absolute top-[16rem] right-[0rem] p-4 flex gap-4 items-center">
            <FaEdit
              className="text-gray-500 cursor-pointer"
              onClick={() => setShowEditorModal(true)}
            />

            <FaTimesCircle
              className="text-red-500 cursor-pointer"
              onClick={clearImages}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, id) => (
              <div key={id} className="relative">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`img-${id}`}
                  className="max-w-32 h-auto"
                />
                <button
                  onClick={() => deleteImage(id)}
                  className="absolute top-0 right-0 bg-white rounded-full p-1"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
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
            <div className="absolute  left-1 text-sm rounded-lg bg-white p-1 shadow-md -mt-14 border border-1">
              <p>Add media</p>
            </div>
          )}
        </div>
        <div className="flex justify-end">
          <button
            onClick={handlePost}
            disabled={isPostButtonDisabled}
            className={`text-[#fff] rounded-[2rem] h-[2rem] px-4 py-2 text-sm ${
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
