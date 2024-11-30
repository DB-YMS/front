import React from "react";

const UserProfile = ({ name, division, curLoc }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "80px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
      className="w-full max-w-[320px] text-center flex flex-col items-center"
    >
      {/* 프로필 이미지 */}
      <div className="w-24 h-24 rounded-full bg-[#E0E0E0] flex items-center justify-center mb-4">
        <span className="text-4xl font-bold text-gray-500">👤</span>
      </div>

      {/* 이름 및 정보 */}
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-base text-gray-600">
        Division: <span className="font-bold">{division}</span>
      </p>
      <p className="text-base text-gray-600">
        Cur Loc: <span className="font-bold">{curLoc}</span>
      </p>
    </div>
  );
};

export default UserProfile;