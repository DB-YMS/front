import React, { useState } from 'react';
import './EquimentCheck.css';

const EquipmentCheck = () => {
  const [isIssuePopupVisible, setIsIssuePopupVisible] = useState(false);
  const [isSubmittedPopupVisible, setIsSubmittedPopupVisible] = useState(false);
  const [isNoIssuePopupVisible, setIsNoIssuePopupVisible] = useState(false);
  const [issueDetails, setIssueDetails] = useState('');

  const handleOpenIssuePopup = () => {
    setIsIssuePopupVisible(true);
  };

  const handleCloseIssuePopup = () => {
    setIsIssuePopupVisible(false);
    setIssueDetails(''); // 입력 초기화
  };

  const handleSubmitIssue = (e) => {
    e.preventDefault();
    setIsIssuePopupVisible(false);
    setIsSubmittedPopupVisible(true);
    setTimeout(() => setIsSubmittedPopupVisible(false), 1000); // 3초 후 팝업 닫기
  };

  const handleNoIssue = () => {
    setIsNoIssuePopupVisible(true);
    setTimeout(() => setIsNoIssuePopupVisible(false), 1000); // 3초 후 팝업 닫기
  };

  return (
    <div className="equipment-check-container">
      <header className="header">장비 점검</header>

      {/* 하단 버튼 */}
      <div className="footer">
        <button className="left-btn" onClick={handleOpenIssuePopup}>장비 이상</button>
        <button className="right-btn" onClick={handleNoIssue}>이상 무</button>
      </div>

      {/* 장비 이상 팝업 */}
      {isIssuePopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>장비 이상 보고</h2>
            <form onSubmit={handleSubmitIssue}>
              <textarea
                placeholder="세부 사항을 작성하세요..."
                value={issueDetails}
                onChange={(e) => setIssueDetails(e.target.value)}
                required
              ></textarea>
              <div className="popup-buttons">
                <button type="submit" className="submit-btn">제출</button>
                <button type="button" className="cancel-btn" onClick={handleCloseIssuePopup}>취소</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 제출 완료 팝업 */}
      {isSubmittedPopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>제출 완료</h2>
            <p>장비 이상 보고가 성공적으로 제출되었습니다.</p>
          </div>
        </div>
      )}

      {/* 이상 무 팝업 */}
      {isNoIssuePopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>이상 무</h2>
            <p>장비 이상 없음이 확인되었습니다.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EquipmentCheck;
