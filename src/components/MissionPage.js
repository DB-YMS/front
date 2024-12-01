import React, { useState } from "react";
import MissionList from "./MissionList";
import MissionDetail from "./MissionDetail";

const missions = [
  { id: 1, title: "Mission 1 : Yard1 -> Yard2", details: "출발 : Yard1\n도착 : Yard2\n장비 : Truck\n시간 : 13:00 출발" },
  { id: 2, title: "Mission 2 : Yard1 -> Yard3", details: "출발 : Yard1\n도착 : Yard3\n장비 : Truck\n시간 : 15:00 출발" },
  { id: 3, title: "Mission 3 : 장비 점검", details: "장비 점검" },
];

const MissionPage = () => {
  const [selectedMission, setSelectedMission] = useState(null);
  const [completedMissions, setCompletedMissions] = useState([]);

  const handleMissionClick = (mission) => setSelectedMission(mission);

  const handleComplete = () => {
    if (selectedMission) {
      setCompletedMissions([...completedMissions, selectedMission.id]);
      setSelectedMission(null);
    }
  };

  return (
    <div className="relative w-full h-screen bg-gray-100">
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
          handleComplete={handleComplete}
        />
      )}
    </div>
  );
};

export default MissionPage;