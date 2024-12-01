import React, { useState } from "react";
import CustomButton from "./button";

const ButtonGrid = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (label) => {
    setSelectedButton(label);
    setTimeout(() => setSelectedButton(null), 100); // 0.1초 후 상태 초기화
  };

  const buttons = ["Commute", "Transit", "Etc 1", "Etc 2", "Etc 3", "Etc 4"];

  return (
    <div className="absolute top-[110px] left-1/2 transform -translate-x-1/2 w-full max-w-[320px] grid grid-cols-2 gap-4">
      {buttons.map((label) => (
        <CustomButton
          key={label}
          label={label}
          isSelected={selectedButton === label}
          onClick={() => handleButtonClick(label)}
          styles={{ height: "100px" }}
        />
      ))}
    </div>
  );
};

export default ButtonGrid;