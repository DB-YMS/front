import React, { useState } from "react";
import UserProfile from "./UserProfile";
import ButtonGrid from "./ButtonGrid";

const Mobile = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (label) => {
    setSelectedButton(label);
  };

  return (
    <div className="bg-[#F5F5F5] h-screen w-screen relative">
      {/* User Profile */}
      <div className="flex flex-col items-center">
        <UserProfile name="James" division="LA" curLoc="PHX" />
      </div>

      {/* Button Grid */}
      <div
        style={{
          position: "relative", // 상대적인 위치로 설정
          top: "150px", // 위로 이동
        }}
      >
        <ButtonGrid
          selectedButton={selectedButton}
          handleButtonClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default Mobile;