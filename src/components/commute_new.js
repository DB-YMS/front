import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Commute = () => {
  const [clockIn, setClockIn] = useState(null);
  const [clockOut, setClockOut] = useState(null);
  const [isClockInPopupVisible, setIsClockInPopupVisible] = useState(false);
  const [isClockOutPopupVisible, setIsClockOutPopupVisible] = useState(false);
  const [isErrorPopupVisible, setIsErrorPopupVisible] = useState(false);
  const navigate = useNavigate();

  // 초기 상태 복원
  useEffect(() => {
    const savedClockIn = localStorage.getItem("clockIn");
    const savedClockOut = localStorage.getItem("clockOut");
    if (savedClockIn) setClockIn(savedClockIn);
    if (savedClockOut) setClockOut(savedClockOut);
  }, []);

  // 시간 포맷 함수: 년, 월, 일, 시, 분까지만 출력
  const formatDateTime = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day} ${hour}:${minute}`;
  };

  const handleClockIn = () => {
    const currentTime = new Date();
    const formattedTime = formatDateTime(currentTime);
    setClockIn(formattedTime);
    localStorage.setItem("clockIn", formattedTime); // 출근 시간 로컬 스토리지에 저장
    setIsClockInPopupVisible(true);
  };

  const handleClockOut = () => {
    if (!clockIn) {
      setIsErrorPopupVisible(true);
    } else {
      const currentTime = new Date();
      const formattedTime = formatDateTime(currentTime);
      setClockOut(formattedTime);
      localStorage.setItem("clockOut", formattedTime); // 퇴근 시간 로컬 스토리지에 저장
      setIsClockOutPopupVisible(true);
    }
  };

  const handleCloseClockInPopup = () => {
    setIsClockInPopupVisible(false);
  };

  const handleCloseClockOutPopup = () => {
    setIsClockOutPopupVisible(false);
  };

  const handleCloseErrorPopup = () => {
    setIsErrorPopupVisible(false);
  };

  const handleBackToMobile = () => {
    // 모바일 화면으로 이동 시 초기화
    if (clockOut) {
      localStorage.removeItem("clockIn");
      localStorage.removeItem("clockOut");
      setClockIn(null);
      setClockOut(null);
    }
    navigate("/mobile"); // /mobile 경로로 이동
  };

  return (
    <div className="relative w-full h-screen bg-gray-100 flex items-center justify-center">
      {/* Back Button */}
      <button
        className="absolute top-6 left-4 text-gray-600 text-xl"
        onClick={handleBackToMobile}
      >
        ❮
      </button>

      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">출퇴근 기록</h1>
        <div className="text-center mb-6">
          <p className="text-lg text-gray-700">출근 시간: {clockIn || "기록 없음"}</p>
          <p className="text-lg text-gray-700">퇴근 시간: {clockOut || "기록 없음"}</p>
        </div>
        <div className="flex gap-4">
          <button
            className={`py-2 px-4 rounded text-white transition transform ${
              clockIn
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600 active:scale-95"
            }`}
            onClick={handleClockIn}
            disabled={!!clockIn} // 출근 버튼 비활성화 조건
          >
            출근
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 active:scale-95 transition transform"
            onClick={handleClockOut}
          >
            퇴근
          </button>
        </div>

        {/* 출근 팝업 모달 */}
        {isClockInPopupVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">출근 기록</h2>
              <p className="text-gray-700 mb-4">출근 시간이 기록되었습니다:</p>
              <p className="text-lg font-bold text-gray-800 mb-6">{clockIn}</p>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                onClick={handleCloseClockInPopup}
              >
                확인
              </button>
            </div>
          </div>
        )}

        {/* 퇴근 팝업 모달 */}
        {isClockOutPopupVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">퇴근 기록</h2>
              <p className="text-gray-700 mb-4">퇴근 시간이 기록되었습니다:</p>
              <p className="text-lg font-bold text-gray-800 mb-6">{clockOut}</p>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                onClick={handleCloseClockOutPopup}
              >
                확인
              </button>
            </div>
          </div>
        )}

        {/* 에러 팝업 모달 */}
        {isErrorPopupVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
              <h2 className="text-xl font-semibold text-red-600 mb-4">오류</h2>
              <p className="text-gray-700 mb-4">출근 기록이 없으므로 퇴근 기록을 저장할 수 없습니다.</p>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                onClick={handleCloseErrorPopup}
              >
                확인
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Commute;