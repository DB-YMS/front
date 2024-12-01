// EquipmentStatusSelect.js
import React, {useEffect} from "react";
import  EquipmentData from "./data_temp";

const EquipmentStatusSelect = ({ selectedEquipment, handleEquipmentClick }) => {

	useEffect(() => {
    if (!selectedEquipment) {
      handleEquipmentClick("total");
    }
  }, [selectedEquipment, handleEquipmentClick]);


  return (
		<div className="p-[8px] mb-[16px] bg-[#F2F2F2] shadow-md rounded-lg">
			<div className="flex justify-between items-center">
				{/* Equipment Type Selection */}
				<div className="flex space-x-2 mb-[16px] " >
					{["Total", "Truck", "Chassis", "Container", "Trailer"].map((type) => (
						<button
							key={type}
							onClick={() => handleEquipmentClick(type.toLowerCase())}
							className={`px-[16px] py-[8px] font-bold rounded-lg shadow-custom  ${
								selectedEquipment === type.toLowerCase() ? "bg-[#A6A6A6] text-white" : "bg-white text-[#000000]"
							}`}
						>
							{type}
						</button>
					))}
				</div>

				<div className="flex mb-4 gap-[4px] items-center text-[#BFBFBF]">
					<div className="text-[16px]">Search by:</div>
					<input
						type="text"
						placeholder="Driver Name"
						className="px-4 py-2 text-[16px] rounded-lg border border-gray-300"
					/>
					<input
						type="text"
						placeholder="Equipment ID"
						className="px-4 py-2 text-[16px] rounded-lg border border-gray-300 "
					/>
					<button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Search</button>
				</div>
			</div>
			{selectedEquipment && (
			<div className="flex gap-[16px] ">
				{EquipmentData[selectedEquipment].map((status) => (
					<div
						key={status.label}
						className={`flex items-center justify-center w-[160px] h-[72px] px-[16px] py-[8px] gap-[8px] ${status.color} text-white rounded-lg`}
					>
						<span className="text-[30px] font-bold">{status.count}</span>
						<span className="text-[16px]">{status.label}</span>
					</div>
				))}
			</div>
			)}
    </div>
  );
};

export default EquipmentStatusSelect;
