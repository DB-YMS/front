import React, { useState } from "react";

const MissionList = ({ missions, completedMissions, handleMissionClick }) => {
  const [temporaryHighlight, setTemporaryHighlight] = useState(null);

  const handleClick = (mission) => {
    if (!completedMissions.includes(mission.id)) {
      handleMissionClick(mission);
      setTemporaryHighlight(mission.id);

      setTimeout(() => {
        setTemporaryHighlight(null);
      }, 100);
    }
  };

  return (
    <div
      className="absolute w-[80%]"
      style={{
        top: "150px", // 전체 위치를 위로 이동
        left: "50px", // 전체 위치를 오른쪽으로 이동
        position: "absolute",
      }}
    >
      {missions.map((mission) => (
        <div
          key={mission.id}
          className={`p-4 mb-4 rounded-lg shadow-md ${
            completedMissions.includes(mission.id) || temporaryHighlight === mission.id
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-white text-black cursor-pointer hover:shadow-lg"
          }`}
          onClick={() => handleClick(mission)}
        >
          {mission.title}
        </div>
      ))}
    </div>
  );
};

export default MissionList;