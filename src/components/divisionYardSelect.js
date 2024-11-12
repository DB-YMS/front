// DivisionAndYardSelect.js
import React from "react";

const DivisionAndYardSelect = ({ selectedDivision, handleDivisionChange, page, totalPages, incrementPage, decrementPage, incrementPageCount, decrementPageCount }) => {
  return (
    <div className="flex mb-4 justify-between items-center p-2 bg-[#F2F2F2] rounded-lg">
      {/* Division Selection */}
      <div className="flex items-center">
        <select
          value={selectedDivision}
          onChange={handleDivisionChange}
          className="px-[8px] py-[4px] text-[20px] font-bold text-[#6292df] rounded-lg border border-gray-300"
        >
          <option value="LA">LA</option>
          <option value="PHX">PHX</option>
          <option value="HOU">HOU</option>
        </select>
      </div>

      {/* Pagination */}
      <div className="flex items-center text-gray-600">
        <button onClick={decrementPage} className="text-lg px-2">{'<'}</button>
        <span className="text-lg">{`${page} / ${totalPages}`}</span>
        <button onClick={incrementPage} className="text-lg px-2">{'>'}</button>
      </div>

      {/* Increase/Decrease Buttons */}
      <div className="flex items-center gap-4">
        <button onClick={incrementPageCount} className="text-green-600 text-2xl font-bold">+</button>
        <button onClick={decrementPageCount} className="text-red-600 text-2xl font-bold">-</button>
      </div>
    </div>
  );
};

export default DivisionAndYardSelect;
