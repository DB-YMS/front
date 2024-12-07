import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EquipmentCheck = () => {
  const [isReportVisible, setIsReportVisible] = useState(false); // 장비 이상 입력칸 표시 상태
  const [issueDetails, setIssueDetails] = useState(""); // 장비 이상 입력 내용
  const [submissionHistory, setSubmissionHistory] = useState([]); // 제출 내역 저장
  const [isErrorPopupVisible, setIsErrorPopupVisible] = useState(false); // 에러 팝업 상태
  const [isSubmittedPopupVisible, setIsSubmittedPopupVisible] = useState(false); // 제출 완료 팝업
  const navigate = useNavigate();

  // 페이지 로드 시 로컬 스토리지에서 제출 내역 불러오기
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

  // 장비 이상 제출
  const handleSubmitReport = () => {
    if (!issueDetails.trim()) {
      setIsErrorPopupVisible(true);
      setTimeout(() => setIsErrorPopupVisible(false), 1000);
      return;
    }
    const currentDate = formatDate();
    const updatedHistory = [
      ...submissionHistory,
      { date: currentDate, message: issueDetails },
    ];
    setSubmissionHistory(updatedHistory);
    localStorage.setItem("submissionHistory", JSON.stringify(updatedHistory));
    setIsSubmittedPopupVisible(true);
    setTimeout(() => setIsSubmittedPopupVisible(false), 1000);
    setIssueDetails(""); // 입력 초기화
    setIsReportVisible(false); // 입력칸 숨기기
  };

  // 이상 무 제출
  const handleNoIssue = () => {
    const currentDate = formatDate();
    const updatedHistory = [
      ...submissionHistory,
      { date: currentDate, message: "이상 무" },
    ];
    setSubmissionHistory(updatedHistory);
    localStorage.setItem("submissionHistory", JSON.stringify(updatedHistory));
  };

  // 제출 내역 초기화
  const handleClearHistory = () => {
    if (submissionHistory.length === 0) {
      setIsErrorPopupVisible(true);
      setTimeout(() => setIsErrorPopupVisible(false), 1000);
      return;
    }
    setSubmissionHistory([]);
    localStorage.removeItem("submissionHistory");
    setIsSubmittedPopupVisible(true);
    setTimeout(() => setIsSubmittedPopupVisible(false), 1000);
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
        <h3 className="text-lg font-bold mb-4">제출 내역</h3>
        <ul className="space-y-2">
          {submissionHistory.map((entry, index) => (
            <li key={index} className="text-gray-700">
              <span className="font-medium">{entry.date}</span> - {entry.message}
            </li>
          ))}
        </ul>
      </div>

      {/* 장비 이상 보고 입력칸 */}
      {isReportVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-11/12 max-w-md">
            <h3 className="text-lg font-bold mb-4">장비 이상 보고</h3>
            <textarea
              className="w-full h-28 p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              placeholder="장비 이상 내용을 작성하세요..."
              value={issueDetails}
              onChange={(e) => setIssueDetails(e.target.value)}
            />
            <div className="flex justify-between">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                onClick={handleSubmitReport}
              >
                제출
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                onClick={() => setIsReportVisible(false)}
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Buttons */}
      <div className="flex justify-between px-6 py-4 mt-auto gap-4">
        <button
          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
          onClick={() => setIsReportVisible(true)} // 장비 이상 보고칸 표시
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
          onClick={handleClearHistory}
        >
          제출
        </button>
      </div>

      {/* 에러 팝업 */}
      {isErrorPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-11/12 max-w-md">
            <h2 className="text-xl font-bold text-red-500 mb-4">오류</h2>
            <p className="text-gray-700">장비 보고를 해주세요.</p>
          </div>
        </div>
      )}

      {/* 제출 완료 팝업 */}
      {isSubmittedPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-11/12 max-w-md">
            <h2 className="text-xl font-bold text-blue-500 mb-4">제출 완료</h2>
            <p className="text-gray-700">제출이 성공적으로 완료되었습니다.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EquipmentCheck;