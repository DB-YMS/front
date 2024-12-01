import React from "react";
import Login from "../src/components/login";
import SignupPage from "../src/components/signup"; // 경로 수정: "..." 대신 "../src" 사용
import Commute from '../src/components/commute';
import EquipmentCheck from "../src/components/EquimentCheck";
import MissionPage from "../src/components/MissionPage";

function App() {
  return (
    <div>
      <Login />
    </div>
  );
  
}

export default App;
