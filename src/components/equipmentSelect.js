// EquipmentStatusSelect.js
import React, {useEffect} from "react";

const EquipmentStatusSelect = ({ selectedEquipment, handleEquipmentClick }) => {
  const equipmentData = {
		total: [
      { label: "Total equipments", count: "102", color: "bg-green-500" },
      { label: "Available equipments", count: "80", color: "bg-green-400" },
      { label: "Equipments in Transit", count: "19", color: "bg-blue-500" },
      { label: "Equipments at Malfunction", count: "7", color: "bg-red-500" },
    ],
    truck: [
      { label: "Total Trucks", count: "27", color: "bg-green-500" },
      { label: "Available Trucks", count: "25", color: "bg-green-400" },
      { label: "Trucks in Transit", count: "4", color: "bg-blue-500" },
      { label: "Trucks at Malfunction", count: "2", color: "bg-red-500" },
    ],
    chassis: [
      { label: "Total Chassis", count: "15", color: "bg-green-500" },
      { label: "Available Chassis", count: "10", color: "bg-green-400" },
      { label: "Chassis in Transit", count: "3", color: "bg-blue-500" },
      { label: "Chassis at Malfunction", count: "2", color: "bg-red-500" },
    ],
    container: [
      { label: "Total Containers", count: "40", color: "bg-green-500" },
      { label: "Available Containers", count: "30", color: "bg-green-400" },
      { label: "Containers in Transit", count: "8", color: "bg-blue-500" },
      { label: "Containers at Malfunction", count: "2", color: "bg-red-500" },
    ],
    trailer: [
      { label: "Total Trailers", count: "20", color: "bg-green-500" },
      { label: "Available Trailers", count: "15", color: "bg-green-400" },
      { label: "Trailers in Transit", count: "4", color: "bg-blue-500" },
      { label: "Trailers at Malfunction", count: "1", color: "bg-red-500" },
    ],
  };

	useEffect(() => {
    if (!selectedEquipment) {
      handleEquipmentClick("total");
    }
  }, [selectedEquipment, handleEquipmentClick]);


  return (
		<div className="p-[8px] bg-[#F2F2F2] shadow-md rounded-lg">
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
				{equipmentData[selectedEquipment].map((status) => (
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
