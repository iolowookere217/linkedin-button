import React from "react";
import Modal from "react-modal";

const CancelModal = ({ isOpen, closeModal, onCancel, onDiscard }) => {
  const handleCancel = () => {
    closeModal(); // Close the cancel modal
    onCancel(); // Go back to the editor modal
  };

  const handleDiscard = () => {
    closeModal(); // Close the cancel modal
    onDiscard(); // Open a fresh post modal
  };

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
          width: "30%",
          height: "40%",
          maxHeight: "600px",
          maxWidth: "600px",
          margin: "auto",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          border: "none",
          padding: "16px",
          backgroundColor: "#fff",
        },
      }}
    >
      <div className="h-full flex flex-col justify-between">
        <div className="flex justify-between items-center h-30%">
          <h2>Discard Changes</h2>
          <button onClick={closeModal}>Close</button>
        </div>
        <div className="h-40%">
          <p>Are you sure you want to discard the changes you have made?</p>
        </div>
        <div className="flex justify-end gap-4 h-30%">
          <button
            onClick={handleCancel}
            className="text-[#004182] px-4 py-2 items-center bg-[#fff] rounded-[2rem] h-[2rem] text-sm hover:focus border border-[#004182]  hover:bg-gray-300 hover:border-2 align-middle justify-center"
          >
            Cancel
          </button>
          <button
            onClick={handleDiscard}
            className="text-[#fff] rounded-[2rem] h-[2rem] px-4 py-2 text-sm items-center bg-[#0a66c2] cursor-pointer hover:bg-[#004182]"
          >
            Discard
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CancelModal;
