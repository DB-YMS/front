import React from "react";

const CustomButton = ({ label, isSelected, onClick, styles = {} }) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center rounded-lg shadow-lg ${
        isSelected ? "bg-[#A6A6A6] text-white" : "bg-white text-black"
      }`}
      style={{
        ...styles,
        height: "150px", // 버튼 높이 (기본값 120px)
        width: "150px", // 버튼 너비 (기본값 140px)
        margin: "0 auto", // 버튼을 가운데 정렬
      }}
    >
      {label}
    </button>
  );
};

export default CustomButton;