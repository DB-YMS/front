import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "../src/components/login";
import SignupPage from "../src/components/signup"; // 경로 수정: "..." 대신 "../src" 사용
import Commute from '../src/components/commute_new';
import EquipmentCheck from "../src/components/equipmentCheck_new";
import MissionPage from "../src/components/MissionPage";
import Yard from "../src/components/Yard"
import Mobile from "../src/components/mobile"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/mobile" element={<Mobile />}></Route>
          <Route path="/mobile/mission" element={<MissionPage />}></Route>
          <Route path="/mobile/equipmentcheck" element={<EquipmentCheck />}></Route>
          <Route path="/mobile/commute" element={<Commute />}></Route>
          <Route path="/yard" element={<Yard />}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
  
}

export default App;
