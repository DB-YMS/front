import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 가져오기
import CustomButton from "./button";

const ButtonGrid = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleButtonClick = (label) => {
    setSelectedButton(label);

    // 버튼에 따라 경로 설정
    if (label === "Commute") {
      navigate("/mobile/commute");
    } else if (label === "equipment check") {
      navigate("/mobile/equipmentcheck");
    } else if (label === "mission") {
      navigate("/mobile/mission");
    }

    // 선택된 버튼 초기화 (0.1초 후)
    setTimeout(() => setSelectedButton(null), 100);
  };

  const buttons = ["Commute", "equipment check", "mission", "Etc 1", "Etc 2", "Etc 3"];

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