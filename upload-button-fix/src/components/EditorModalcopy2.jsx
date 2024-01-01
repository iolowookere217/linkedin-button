import React, { useState } from "react";
import Modal from "react-modal";
import { FaPlusCircle, FaClone, FaTimes, FaTrash } from "react-icons/fa";
import CancelModal from "./cancelModal";
import { v4 as uuidv4 } from "uuid";

const EditorModal = ({
  isOpen,
  closeModal,
  images,
  resetEditor,
  setImages,
  selectedImageIndex,
  setSelectedImageIndex,
}) => {
  const [showHoverModal, setShowHoverModal] = useState(false);
  const [showAddMediaHover, setShowAddMediaHover] = useState(false);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(-1);
  const [showDuplicateHover, setShowDuplicateHover] = useState(false);
  const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);

  const handleHover = (type, status) => {
    // Implement logic for hovering over icons
  };

  const totalImages = images.length;

  const handleImageChange = (e) => {
    const fileList = e.target.files;
    const newImages = Array.from(fileList).map((file) => ({
      id: uuidv4(), // Assign a unique ID to each uploaded image
      file: file, // Store the file object
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
    setSelectedImageIndex(images.length); // Update selected index
  };

  // const handleImageChange = (e) => {
  //   const fileList = e.target.files;
  //   const newImageFiles = Array.from(fileList);
  //   const newImages = [...images, ...newImageFiles];
  //   setImages(newImages);
  //   newImages.length && setSelectedImageIndex(newImages.length - 1);
  // };

  const handleSelectImage = (index) => {
    if (images.length === 1) {
      setSelectedImageIndex(0); // If there's only one image, set the selected index to 0
    } else {
      setSelectedImageIndex(index); // Update the selected index normally
    }
  };
  const duplicateImages = () => {
    const selectedImage = images[selectedImageIndex];
    setImages((prevImages) => [...prevImages, selectedImage]); // Duplicate selected image
    // setSelectedImageIndex(images.length); // Select the duplicated image
    setShowDuplicateHover(true);
  };

  const deleteImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);

    let newSelectedIndex =
      index > updatedImages.length - 1 ? updatedImages.length - 1 : index;

    console.log("checking img index at this point: ", { newSelectedIndex });

    // if the index is the last index, then display the last item on the new updated image

    // else display
    setSelectedImageIndex(newSelectedIndex);
    console.log({ newSelectedIndex, selectedImageIndex });
    console.log("breakpoint");

    // if (index)
    //   if (images.length === 1) {
    //     newSelectedIndex = 0; // If there's only one image left, keep it selected
    //   } else if (index === selectedImageIndex && index === images.length - 1) {
    //     // If the deleted image was the last one, select the new last image
    //     newSelectedIndex = images.length - 1;
    //   } else if (index === selectedImageIndex) {
    //     // If the deleted image was selected, maintain the selected index or select the last image
    //     newSelectedIndex = Math.min(index, images.length - 1);
    //   }

    // setSelectedImageIndex(newSelectedIndex);
  };
  const handleBack = () => {
    resetEditor(); // Call the resetEditor function passed from PostModal
    closeModal(); // Close the EditorModal
  };

  const handleCancel = () => {
    setShowCancelConfirmation(true);
  };
  console.log("This is the sel img index: ", { selectedImageIndex });
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          // Add overlay styles here...
        },
        content: {
          overflowY: "hidden",
          width: "75rem",
          margin: "auto",
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
        <div className="flex justify-between items-center h-10% mb-4 font-bold">
          <h2>Editor</h2>
          <button onClick={handleCancel}>
            <FaTimes />
          </button>
        </div>

        <div className="flex w-[70rem]  h-[40rem] items-center  bg-[#f8fafd] ">
          <div className="w-3/4 border-r pr-4 ">
            <div className="flex  gap-4 mt-4 p-2 justify-center ">
              {/* Display currently selected image */}
              <img
                src={
                  images[selectedImageIndex] &&
                  URL.createObjectURL(images[selectedImageIndex])
                }
                alt={`img-${selectedImageIndex}`}
                className="max-w-32 max-h-[25rem] "
              />
            </div>
          </div>
          <div className="w-1/3  bg-transparent overflow-y-auto  ">
            <div className="flex flex-col bg-white rounded-xl p-2 mr-2 gap-2">
              <div>
                {" "}
                <h1>
                  {`${selectedImageIndex + 1} of ${totalImages}`}{" "}
                  {/* Display the count */}
                </h1>
              </div>
              <div className="grid grid-cols-2 relative max-h-[18rem] gap-8  p-6 rounded-xl bg-white overflow-y-scroll">
                {/* Display images in control section */}
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative cursor-pointer p-4 bg-ash items-center flex ${
                      index === selectedImageIndex
                        ? "border-2 border-blue-500"
                        : ""
                    }`}
                    onClick={() => handleSelectImage(index)}
                  >
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`img-${index}`}
                      className="max-w-32 flex h-auto justify-center"
                    />
                    <button className="absolute top-0 left-0 h-[1.3rem] items-center bg-none text-white rounded-full p-1  text-xs">
                      {index + 1}
                    </button>
                    <button
                      onClick={() => deleteImage(index)}
                      className="absolute top-0 -left-6 bg-none rounded-full p-1 text-[#004182]"
                      onMouseEnter={() => setHoveredImageIndex(index)}
                      onMouseLeave={() => setHoveredImageIndex(-1)}
                    >
                      <FaTrash />
                      {hoveredImageIndex === index && (
                        <div className="absolute top-0 left-0 bg-white p-1 shadow-md -mt-7 border rounded-lg text-xs">
                          Delete
                        </div>
                      )}
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4 items-center gap-4">
                {/* Control section for images */}
                <label
                  htmlFor="additional-images"
                  className="flex items-center cursor-pointer relative"
                  onMouseEnter={() => setShowAddMediaHover(true)}
                  onMouseLeave={() => setShowAddMediaHover(false)}
                >
                  <FaPlusCircle className="mr-1 text-2xl text-[#0a66c2]" />
                  {showAddMediaHover && (
                    <div className="absolute top-0 left-0 bg-white p-1 shadow-md -mt-7 border rounded-lg text-xs">
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
                  disabled={images.length === 0} // Disable the button when there are no images
                  className={`flex items-center relative ${
                    images.length === 0
                      ? "cursor-not-allowed opacity-50"
                      : "hover:text-[#004182]"
                  }`}
                  onMouseEnter={() => setShowDuplicateHover(true)}
                  onMouseLeave={() => setShowDuplicateHover(false)}
                >
                  <FaClone className="mr-1 text-2xl text-[#0a66c2]" />
                  {showDuplicateHover && (
                    <div className="absolute top-0 left-0 bg-white p-1 shadow-md -mt-7 border rounded-lg text-xs">
                      Duplicate
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4 gap-4 h-10% ">
          <button
            onClick={handleBack}
            className="text-[#616366] px-4 py-2 items-center bg-[#fff] rounded-[2rem] h-[2rem] text-sm hover:focus border border-[#004182]  hover:bg-gray-300 hover:border-2 align-middle justify-center"
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
