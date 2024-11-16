// Yard.js
import React, { useState } from "react";
import DivisionAndYardSelect from "./divisionYardSelect";
import EquipmentStatusSelect from "./equipmentSelect";

const Yard = () => {
  const [selectedDivision, setSelectedDivision] = useState("LA");
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(8); // 초기 총 페이지 수 

  const handleDivisionChange = (event) => {
    setSelectedDivision(event.target.value);
  };

  const handleEquipmentClick = (equipment) => {
    setSelectedEquipment(equipment);
  };

  const incrementPageCount = () => {
    setTotalPages((prevTotal) => prevTotal + 1);
  };

  const decrementPageCount = () => {
    setTotalPages((prevTotal) => (prevTotal > 1 ? prevTotal - 1 : prevTotal));
    setPage((prevPage) => (prevPage > totalPages - 1 ? totalPages - 1 : prevPage));
  };

  const incrementPage = () => {
    setPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const decrementPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  return (
    <div className="p-4 bg-[#BFBFBF] min-h-screen">
      {/* Division and Yard Selection */}
      <DivisionAndYardSelect 
        selectedDivision={selectedDivision}
        handleDivisionChange={handleDivisionChange} 
        page={page}
        totalPages={totalPages}
        incrementPage={incrementPage}
        decrementPage={decrementPage}
        incrementPageCount={incrementPageCount}
        decrementPageCount={decrementPageCount}
      />

      {/* Equipment Type and Status Selection */}
      <EquipmentStatusSelect 
        selectedEquipment={selectedEquipment} 
        handleEquipmentClick={handleEquipmentClick} 
      />


      
    </div>
  );
};

export default Yard;
