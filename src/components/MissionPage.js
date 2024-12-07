import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 추가
import MissionList from "./MissionList";
import MissionDetail from "./MissionDetail";

const missions = [
  { id: 1, title: "Mission 1 : Yard1 -> Yard2", details: "출발 : Yard1\n도착 : Yard2\n장비 : Truck\n시간 : 13:00 출발" },
  { id: 2, title: "Mission 2 : Yard1 -> Yard3", details: "출발 : Yard1\n도착 : Yard3\n장비 : Truck\n시간 : 15:00 출발" },
  { id: 3, title: "Mission 3 : 장비 점검", details: "장비 점검" },
];

const MissionPage = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [selectedMission, setSelectedMission] = useState(null);
  const [completedMissions, setCompletedMissions] = useState([]);
  const [missionStatus, setMissionStatus] = useState(
    missions.reduce((acc, mission) => {
      acc[mission.id] = { isStarted: false, isCompleted: false, statusMessage: "" };
      return acc;
    }, {})
  );

  const handleMissionClick = (mission) => setSelectedMission(mission);

  const handleComplete = (missionId) => {
    setCompletedMissions([...completedMissions, missionId]);
    setMissionStatus((prevState) => ({
      ...prevState,
      [missionId]: { ...prevState[missionId], isCompleted: true, statusMessage: "도착 완료!" },
    }));
    setSelectedMission(null);
  };

  const handleStart = (missionId) => {
    setMissionStatus((prevState) => ({
      ...prevState,
      [missionId]: { ...prevState[missionId], isStarted: true, statusMessage: "이동중..." },
    }));
  };

  const handleArrival = (missionId) => {
    if (!missionStatus[missionId].isStarted) return;
    setMissionStatus((prevState) => ({
      ...prevState,
      [missionId]: { ...prevState[missionId], isCompleted: true, statusMessage: "도착 완료!" },
    }));
    setTimeout(() => handleComplete(missionId), 100);
  };

  const handleBack = () => {
    setSelectedMission(null); // 이전 버튼 클릭 시 상세창 닫기
  };

  const handleBackToMobile = () => {
    navigate("/mobile"); // /mobile 경로로 이동
  };

  return (
    <div className="relative w-full h-screen bg-gray-100">
      {/* Back Button */}
      <button
        className="absolute top-6 left-4 text-gray-600 text-xl"
        onClick={handleBackToMobile}
      >
        ❮
      </button>

      {/* Title */}
      <h1 className="absolute top-20 left-1/2 transform -translate-x-1/2 text-lg font-bold">
        미션 페이지
      </h1>

      {/* Mission List */}
      <MissionList
        missions={missions}
        completedMissions={completedMissions}
        handleMissionClick={handleMissionClick}
      />

      {/* Mission Detail */}
      {selectedMission && (
        <MissionDetail
          selectedMission={selectedMission}
          handleStart={handleStart}
          handleArrival={handleArrival}
          handleBack={handleBack}
          missionStatus={missionStatus}
        />
      )}
    </div>
  );
};

export default MissionPage;