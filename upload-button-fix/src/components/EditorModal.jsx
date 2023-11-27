import React from "react";
import Modal from "react-modal";
import { FaPlusCircle, FaClone, FaTimes, FaTrash } from "react-icons/fa";

const EditorModal = ({
  isOpen,
  closeModal,
  images,
  addMoreImages,
  deleteImage,
  duplicateImages,
}) => {
  const handleHover = (type, status) => {
    // Implement logic for hovering over icons
  };

  const handleImageChange = (e) => {
    const fileList = e.target.files;
    const newImages = Array.from(fileList);
    setImages(newImages); // Update images in EditorModal
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
      <div className="h-full flex flex-col justify-between">
        <div className="flex justify-between items-center h-10%">
          <h2>Editor</h2>
          <button onClick={closeModal}>
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
                  <FaTimes />
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 items-center align-middle">
            <label htmlFor="additional-images" className="flex items-center">
              <FaPlusCircle className="mr-1" />
              Upload More Images
              <input
                id="additional-images"
                type="file"
                multiple
                className="hidden"
                onChange={addMoreImages}
              />
            </label>
            <button onClick={duplicateImages}>
              <FaClone /> Duplicate Images
            </button>
          </div>
        </div>
        <div className="flex justify-end gap-4 h-10% ">
          <button className="text-[#fff] px-4 py-2 text-sm bg-gray-300 cursor-not-allowed rounded-lg">
            Back
          </button>
          <button
            onClick={duplicateImages}
            className={`text-[#fff] rounded-lg px-4 py-2 text-sm ${
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
