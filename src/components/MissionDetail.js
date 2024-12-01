import React, { useState } from "react";

const MissionDetail = ({ selectedMission, handleComplete, handleBack }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClickComplete = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      handleComplete(); // 완료 로직 호출
    }, 100);
  };

  return (
    <div className="absolute bottom-10 left-0 w-full bg-white p-6 shadow-lg rounded-lg">
      {/* 미션 제목 */}
      <h2 className="text-lg font-bold mb-4 text-center">{selectedMission.title}</h2>

      {/* 미션 세부 정보 */}
      <p
        className="mb-6 text-center text-gray-700"
        style={{ whiteSpace: "pre-line" }} // 줄바꿈 처리
      >
        {selectedMission.details}
      </p>

      {/* 버튼 그룹 */}
      <div className="flex justify-center gap-4">
        {/* 완료 버튼 */}
        <button
          onClick={handleClickComplete}
          className={`text-white px-6 py-3 rounded-lg transition-colors duration-200 ${
            isClicked ? "bg-green-700" : "bg-green-500"
          }`}
        >
          완료
        </button>

        {/* 이전 버튼 */}
        <button
          onClick={handleBack} // handleBack 호출
          className="text-white px-6 py-3 rounded-lg bg-red-500 hover:bg-red-600 transition-colors duration-200"
        >
          이전
        </button>
      </div>
    </div>
  );
};

export default MissionDetail;