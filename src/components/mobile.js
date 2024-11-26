// Yard.js
import React, { useState } from "react";

const SquareBox = ({ top, left, label }) => {
    // 개별 네모 상자 컴포넌트
    return (
    <div
    style={{
        position: "absolute",
        top: `${top}px`,
        left: `${left}px`,
        width: "150px", 
        height: "150px",
        backgroundColor: "#F2F2F2", 
        borderRadius: "20px", 
        display: "flex", 
        justifyContent: "center",
        alignItems: "flex-end",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        fontSize: "16px", // 글씨 크기
        fontWeight: "bold", // 글씨 굵기
    }}>
    {label}
    </div>
    );
};

const Mobile = () => {
  const [division, setDivision] = useState("LA");
  const [curLoc, setCurLoc] = useState("PHX");

  const divisionOptions = ["LA", "PHX", "HOU", "SAV", "MOB"];
  const curLocOptions = ["LA", "PHX", "HOU", "SAV", "MOB"];

  return (
    <div
    style={{
        width: "420px", // 화면 너비
        height: "840px", // 화면 높이
        margin: "0 auto", // 화면 가운데 정렬
        overflow: "hidden", // 크기 초과되는 내용 숨기기
        position: "relative", // 상위 컨테이너 기준 설정
        backgroundColor: "white",
    }}
    >
    {/* 화면 가운데 선 */}
    <div
    style={{
        position : "absolute",
        top : "235px",
        left: "23px",
        width: "350px",
        height: "6px",
        backgroundColor: "lightgray",
        borderRadius: "3px",
    }}></div>

    {/* 프로필 사진 */}
    <div
    style={{
        position: "absolute",
        top: "10%",
        left: "13%",
        width: "130px",
        height: "130px",
        backgroundColor: "lightgray", // 프로필 배경 색
        borderRadius: "50%", // 동그라미 모양
    }}
    ></div>

    {/* 이름 및 입력 가능한 정보 */}
    <div
    style={{
        position: "absolute",
        top: "18%",
        left: "54%",
        transform: "translateY(-50%)",
    }}
    >
    <div
    style={{
        fontSize: "24px",
        fontWeight: "600",
        marginBottom: "8px",
    }}
    >James</div>
    <div>

    <label>
    Division:
    <select
        value={division}
        onChange={(e) => setDivision(e.target.value)}
        style={{
            marginLeft: "8px",
            padding: "4px",
            fontSize: "16px",
        }}>
            {divisionOptions.map((option) => (
                <option key={option} value={option}>
                {option}
                </option>
            ))}
            </select>
        </label>
        </div>

        <div style={{ marginTop: "8px" }}>
        <label>
            Cur Loc:
            <select
            value={curLoc}
            onChange={(e) => setCurLoc(e.target.value)}
            style={{
                marginLeft: "8px",
                padding: "4px",
                fontSize: "16px",
            }}>
            {curLocOptions.map((option) => (
                <option key={option} value={option}>
                {option}
                </option>
            ))}
            </select>
        </label>
        </div>
    </div>

    {/* 네모 여섯 칸 */}
    <SquareBox top={270} left={35} label="etc" />
    <SquareBox top={270} left={210} label="etc" />
    <SquareBox top={446} left={35} label="etc" />
    <SquareBox top={446} left={210} label="etc" />
    <SquareBox top={622} left={35} label="etc" />
    <SquareBox top={622} left={210} label="etc" />
    </div>
  );
};

export default Mobile;