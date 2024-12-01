import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 가져오기

function SignupPage() {
  // 상태 관리
  const [formData, setFormData] = useState({
    username: "",
    id: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, id, password, confirmPassword } = formData;

    // 간단한 유효성 검사
    if (!username || !id || !password || !confirmPassword) {
      setError("모든 필드를 입력해주세요.");
      return;
    }

    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    setError("");
    setIsModalOpen(true); // 회원가입 완료 후 모달 창 열기
  };

  // 확인 버튼 클릭 시 로그인 페이지로 이동
  const handleModalConfirm = () => {
    setIsModalOpen(false); // 모달 닫기
    navigate("/login"); // 로그인 페이지로 이동
  };

  return (
    <div style={styles.container}>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {error && <p style={styles.error}>{error}</p>}

        <div style={styles.inputGroup}>
          <label htmlFor="username">사용자 이름</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="사용자 이름을 입력하세요"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="id">아이디</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="아이디를 입력하세요"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="비밀번호를 입력하세요"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="confirmPassword">비밀번호 확인</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="비밀번호를 다시 입력하세요"
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button}>
          회원가입
        </button>
      </form>

      {/* 모달 창 */}
      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <p style={styles.modalText}>회원가입이 완료되었습니다!</p>
            <button onClick={handleModalConfirm} style={styles.modalButton}>
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginBottom: "15px",
  },
  modalOverlay: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  modalText: {
    marginBottom: "20px",
    fontSize: "16px",
  },
  modalButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default SignupPage;