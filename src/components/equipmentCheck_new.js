import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EquipmentCheck = () => {
  const [isIssuePopupVisible, setIsIssuePopupVisible] = useState(false);
  const [isSubmittedPopupVisible, setIsSubmittedPopupVisible] = useState(false);
  const [isNoIssuePopupVisible, setIsNoIssuePopupVisible] = useState(false);
  const [isAllSubmittedPopupVisible, setIsAllSubmittedPopupVisible] = useState(false);
  const [issueDetails, setIssueDetails] = useState("");
  const [submissionHistory, setSubmissionHistory] = useState([]); // 제출 내역 저장
  const navigate = useNavigate();

  // 페이지 로드 시 제출 내역 복원
  useEffect(() => {
    const savedHistory = localStorage.getItem("submissionHistory");
    if (savedHistory) {
      setSubmissionHistory(JSON.parse(savedHistory));
    }
  }, []);

  // 날짜 포맷 함수
  const formatDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hour = String(now.getHours()).padStart(2, "0");
    const minute = String(now.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day} ${hour}:${minute}`;
  };

  const handleOpenIssuePopup = () => {
    setIsIssuePopupVisible(true);
  };

  const handleCloseIssuePopup = () => {
    setIsIssuePopupVisible(false);
    setIssueDetails(""); // 입력 초기화
  };

  const handleSubmitIssue = (e) => {
    e.preventDefault();
    const currentDate = formatDate();
    const newEntry = { date: currentDate, message: issueDetails };

    // 제출 내역 업데이트 및 저장
    const updatedHistory = [...submissionHistory, newEntry];
    setSubmissionHistory(updatedHistory);
    localStorage.setItem("submissionHistory", JSON.stringify(updatedHistory));

    setIsIssuePopupVisible(false);
    setIsSubmittedPopupVisible(true);
    setTimeout(() => setIsSubmittedPopupVisible(false), 1000); // 1초 후 팝업 닫기
  };

  const handleNoIssue = () => {
    const currentDate = formatDate();
    const newEntry = { date: currentDate, message: "이상 무" };

    // 제출 내역 업데이트 및 저장
    const updatedHistory = [...submissionHistory, newEntry];
    setSubmissionHistory(updatedHistory);
    localStorage.setItem("submissionHistory", JSON.stringify(updatedHistory));

    setIsNoIssuePopupVisible(true);
    setTimeout(() => setIsNoIssuePopupVisible(false), 1000); // 1초 후 팝업 닫기
  };

  const handleSubmitAll = () => {
    setSubmissionHistory([]); // 제출 내역 초기화
    localStorage.removeItem("submissionHistory"); // 로컬 스토리지 초기화
    setIsAllSubmittedPopupVisible(true);
    setTimeout(() => setIsAllSubmittedPopupVisible(false), 1000); // 1초 후 팝업 닫기
  };

  const handleBackToMobile = () => {
    navigate("/mobile"); // /mobile 경로로 이동
  };

  return (
    <div className="flex flex-col h-screen justify-between bg-gray-100 font-sans">
      {/* Back Button */}
      <button
        className="absolute top-4 left-4 text-gray-600 text-2xl"
        onClick={handleBackToMobile}
      >
        ❮
      </button>

      {/* Header */}
      <header className="bg-blue-500 text-white text-center py-6 text-xl shadow-md">
        장비 점검
      </header>

      {/* Submission History */}
      <div className="bg-white shadow-md rounded-lg px-6 py-4 mx-6 mt-4">
        <h3 className="text-lg font-bold mb-4">저장 내역</h3>
        <ul className="space-y-2">
          {submissionHistory.map((entry, index) => (
            <li key={index} className="text-gray-700">
              <span className="font-medium">{entry.date}</span> - {entry.message}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between px-6 py-4 mt-auto gap-4">
        <button
          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
          onClick={handleOpenIssuePopup}
        >
          장비 이상
        </button>
        <button
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
          onClick={handleNoIssue}
        >
          이상 무
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          onClick={handleSubmitAll}
        >
          제출
        </button>
      </div>

      {/* 장비 이상 팝업 */}
      {isIssuePopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-11/12 max-w-md">
            <h2 className="text-xl font-bold mb-4">장비 이상 보고</h2>
            <form onSubmit={handleSubmitIssue}>
              <textarea
                className="w-full h-28 p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                placeholder="세부 사항을 작성하세요..."
                value={issueDetails}
                onChange={(e) => setIssueDetails(e.target.value)}
                required
              />
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  저장
                </button>
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                  onClick={handleCloseIssuePopup}
                >
                  취소
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 저장 완료 팝업 */}
      {isSubmittedPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-11/12 max-w-md">
            <h2 className="text-xl font-bold text-blue-500 mb-4">저장 완료</h2>
            <p className="text-gray-700">성공적으로 저장되었습니다.</p>
          </div>
        </div>
      )}

      {/* 전체 제출 완료 팝업 */}
      {isAllSubmittedPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-11/12 max-w-md">
            <h2 className="text-xl font-bold text-blue-500 mb-4">제출 완료</h2>
            <p className="text-gray-700">성공적으로 제출되었습니다.</p>
          </div>
        </div>
      )}

      {/* 이상 무 팝업 */}
      {isNoIssuePopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-11/12 max-w-md">
            <h2 className="text-xl font-bold text-green-500 mb-4">이상 무</h2>
            <p className="text-gray-700">장비 이상 없음이 확인되었습니다.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EquipmentCheck;