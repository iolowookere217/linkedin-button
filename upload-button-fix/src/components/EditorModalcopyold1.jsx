import React, { useState } from "react";
import Modal from "react-modal";
import { FaPlusCircle, FaClone, FaTimes, FaTrash } from "react-icons/fa";
import CancelModal from "./cancelModal";

const EditorModal = ({
  isOpen,
  closeModal,
  images,
  resetEditor,
  setImages,
}) => {
  const [showHoverModal, setShowHoverModal] = useState(false);
  const [showAddMediaHover, setShowAddMediaHover] = useState(false);
  const [showDuplicateHover, setShowDuplicateHover] = useState(false);
  const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);

  const handleHover = (type, status) => {
    // Implement logic for hovering over icons
  };

  const handleImageChange = (e) => {
    const fileList = e.target.files;
    const newImages = Array.from(fileList);
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const duplicateImages = () => {
    setImages((prevImages) => [...prevImages, ...images]); // Duplicate existing images
    setShowDuplicateHover(true);
  };

  const deleteImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handleBack = () => {
    resetEditor(); // Call the resetEditor function passed from PostModal
    closeModal(); // Close the EditorModal
  };

  const handleCancel = () => {
    setShowCancelConfirmation(true);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          // Add overlay styles here...
        },
        content: {
          // Add content styles here...
        },
      }}
    >
      {showCancelConfirmation && (
        <CancelModal
          isOpen={showCancelConfirmation}
          closeModal={() => setShowCancelConfirmation(false)}
        />
      )}

      <div className="h-full flex flex-col justify-between">
        <div className="flex justify-between items-center h-10%">
          <h2>Editor</h2>
          <button onClick={handleCancel}>
            <FaTimes />
          </button>
        </div>
        <div className="h-80%">
          {/* Main section for displaying images */}
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
        </div>
        <div className="flex justify-center mt-4 items-center gap-4">
          <label
            htmlFor="additional-images"
            className="flex items-center cursor-pointer relative"
            onMouseEnter={() => setShowAddMediaHover(true)}
            onMouseLeave={() => setShowAddMediaHover(false)}
          >
            <FaPlusCircle className="mr-1 text-2xl text-[#0a66c2]" />
            {showAddMediaHover && (
              <div className="absolute top-0 left-0 bg-white p-1 shadow-md -mt-10 border rounded-lg text-sm">
                Add
              </div>
            )}
            <input
              id="additional-images"
              type="file"
              multiple
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
          <button
            onClick={duplicateImages}
            className="flex items-center cursor-pointer hover:text-[#004182] relative"
            onMouseEnter={() => setShowDuplicateHover(true)}
            onMouseLeave={() => setShowDuplicateHover(false)}
          >
            <FaClone className="mr-1 text-2xl text-[#0a66c2]" />

            {showDuplicateHover && (
              <div className="absolute top-0 left-0 bg-white p-1 shadow-md -mt-10 border rounded-lg text-sm">
                Duplicate
              </div>
            )}
          </button>
        </div>
        <div className="flex justify-end gap-4 h-10% ">
          <button
            onClick={handleBack}
            className="text-[#004182] px-4 py-2 items-center bg-[#fff] rounded-[2rem] h-[2rem] text-sm hover:focus border border-[#004182]  hover:bg-gray-300 hover:border-2 align-middle justify-center"
          >
            Back
          </button>
          <button
            onClick={closeModal}
            className={`text-[#fff] rounded-[2rem] h-[2rem] px-4 py-2 text-sm items-center ${
              images.length === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#0a66c2] cursor-pointer hover:bg-[#004182]"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditorModal;
