import React, { useState } from 'react';
import './commute.css'; // 스타일링 파일 연결

const Commute = () => {
  const [clockIn, setClockIn] = useState(null);
  const [clockOut, setClockOut] = useState(null);
  const [isClockInPopupVisible, setIsClockInPopupVisible] = useState(false);
  const [isClockOutPopupVisible, setIsClockOutPopupVisible] = useState(false);

  // 시간 포맷 함수: 년, 월, 일, 시, 분까지만 출력
  const formatDateTime = (date) => {
    const year = date.getFullYear(); // 년도
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월 (2자리로)
    const day = String(date.getDate()).padStart(2, '0'); // 일 (2자리로)
    const hour = String(date.getHours()).padStart(2, '0'); // 시 (2자리로)
    const minute = String(date.getMinutes()).padStart(2, '0'); // 분 (2자리로)
    return `${year}-${month}-${day} ${hour}:${minute}`;
  };

  const handleClockIn = () => {
    const currentTime = new Date();
    setClockIn(formatDateTime(currentTime)); // 포맷된 시간으로 저장
    setIsClockInPopupVisible(true); // 출근 팝업 표시
  };

  const handleClockOut = () => {
    const currentTime = new Date();
    setClockOut(formatDateTime(currentTime)); // 포맷된 시간으로 저장
    setIsClockOutPopupVisible(true); // 퇴근 팝업 표시
  };

  const handleCloseClockInPopup = () => {
    setIsClockInPopupVisible(false); // 출근 팝업 닫기
  };

  const handleCloseClockOutPopup = () => {
    setIsClockOutPopupVisible(false); // 퇴근 팝업 닫기
  };

  return (
    <div className="commute-container">
      <h1>출퇴근 기록</h1>
      <div className="time-display">
        <p>출근 시간: {clockIn || '기록 없음'}</p>
        <p>퇴근 시간: {clockOut || '기록 없음'}</p>
      </div>
      <div className="button-group">
        <button className="clock-in-btn" onClick={handleClockIn}>출근</button>
        <button className="clock-out-btn" onClick={handleClockOut}>퇴근</button>
      </div>

      {/* 출근 팝업 모달 */}
      {isClockInPopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>출근 기록</h2>
            <p>출근 시간이 기록되었습니다:</p>
            <p className="popup-time">{clockIn}</p>
            <button onClick={handleCloseClockInPopup}>확인</button>
          </div>
        </div>
      )}

      {/* 퇴근 팝업 모달 */}
      {isClockOutPopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>퇴근 기록</h2>
            <p>퇴근 시간이 기록되었습니다:</p>
            <p className="popup-time">{clockOut}</p>
            <button onClick={handleCloseClockOutPopup}>확인</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Commute;


  
