import React, { useState } from "react";
import EquipmentData from "./data_temp";

const Parking = () => {
  const initialEquipments = [
    ...Array(parseInt(EquipmentData.truck[1].count)).fill("Truck"),
    ...Array(parseInt(EquipmentData.chassis[1].count)).fill("Chassis"),
    ...Array(parseInt(EquipmentData.container[1].count)).fill("Container"),
    ...Array(parseInt(EquipmentData.trailer[1].count)).fill("Trailer"),
  ];

  const [slots, setSlots] = useState(
    Array(100)
      .fill(null)
      .map((_, index) => ({
        id: index + 1,
        equipment: initialEquipments[index] || null,
      }))
  );

  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (slotId) => {
    setDraggingItem(slotId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (targetSlotId) => {
    if (draggingItem !== null && draggingItem !== targetSlotId) {
      setSlots((prevSlots) => {
        const updatedSlots = [...prevSlots];
        const draggingSlot = updatedSlots.find((slot) => slot.id === draggingItem);
        const targetSlot = updatedSlots.find((slot) => slot.id === targetSlotId);

        if (draggingSlot && draggingSlot.equipment) {
          targetSlot.equipment = draggingSlot.equipment;
          draggingSlot.equipment = null;
        }

        return updatedSlots;
      });
    }
    setDraggingItem(null);
  };

  const getEquipmentColor = (equipment) => {
    switch (equipment) {
      case "Truck":
        return "bg-green-500";
      case "Chassis":
        return "bg-blue-500";
      case "Container":
        return "bg-yellow-500";
      case "Trailer":
        return "bg-red-500";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4">Parking Lot</h2>
      <div className="grid grid-cols-10 gap-2">
        {slots.map((slot) => (
          <div
            key={slot.id}
            className="w-12 h-12 bg-gray-200 rounded-md flex flex-col items-center justify-center border border-gray-300 text-center"
            draggable={slot.equipment !== null}
            onDragStart={() => handleDragStart(slot.id)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(slot.id)}
          >
            <span className="text-xs font-semibold">{slot.id}</span>
            {slot.equipment ? (
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${getEquipmentColor(
                  slot.equipment
                )}`}
              >
                {slot.equipment[0]}
              </div>
            ) : (
              <span className="text-gray-400 text-xs">Empty</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parking;
