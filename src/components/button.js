import React from "react";

const CustomButton = ({ label, isSelected, onClick, styles = {} }) => {
    return (
        <button
            onClick={onClick}
            className={`px-[16px] py-[8px] font-bold rounded-lg shadow-custom ${
                isSelected ? "bg-[#A6A6A6] text-white" : "bg-white text-[#000000]"
            }`}
            style={styles}
        >
            {label}
        </button>
    );
};

export default CustomButton;