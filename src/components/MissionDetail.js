import React from "react";

const MissionDetail = ({
  selectedMission,
  handleStart,
  handleArrival,
  handleBack,
  missionStatus,
}) => {
  const currentMissionStatus = missionStatus[selectedMission.id] || {};

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

      {/* 상태 메시지 */}
      {currentMissionStatus.statusMessage && (
        <p className="text-center text-red-500 font-semibold mb-4">
          {currentMissionStatus.statusMessage}
        </p>
      )}

      {/* 버튼 그룹 */}
      <div className="flex justify-center gap-4">
        {/* 출발 버튼 */}
        <button
          onClick={() => handleStart(selectedMission.id)}
          disabled={currentMissionStatus.isCompleted}
          className={`text-white px-6 py-3 rounded-lg transition-colors duration-200 ${
            currentMissionStatus.isCompleted
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          출발
        </button>

        {/* 도착 버튼 */}
        <button
          onClick={() => handleArrival(selectedMission.id)}
          disabled={!currentMissionStatus.isStarted || currentMissionStatus.isCompleted}
          className={`text-white px-6 py-3 rounded-lg transition-colors duration-200 ${
            !currentMissionStatus.isStarted || currentMissionStatus.isCompleted
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          도착
        </button>

        {/* 이전 버튼 */}
        <button
          onClick={handleBack}
          className="text-white px-6 py-3 rounded-lg bg-red-500 hover:bg-red-600 transition-colors duration-200"
        >
          이전
        </button>
      </div>
    </div>
  );
};

export default MissionDetail;