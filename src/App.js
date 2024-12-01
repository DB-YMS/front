import React from "react";
import Login from "../src/components/login";
import SignupPage from "../src/components/signup"; // 경로 수정: "..." 대신 "../src" 사용
import Commute from '../src/components/commute';
import EquipmentCheck from "../src/components/EquimentCheck";

function App() {
  return (
    <div>
      <Login />
      <SignupPage />
      <Commute />
      <EquipmentCheck />
     
    </div>
  );
}

export default App;
