
// Yard.js
import React, { useState } from "react";
import DivisionAndYardSelect from "./divisionYardSelect";
import EquipmentStatusSelect from "./equipmentSelect";

const Mobile = () => {
    return (
        <div 
        style={{
            width: "420px", // 화면 너비
            height: "840px", // 화면 높이
            margin: "0 auto", // 화면 가운데 정렬
            border: "8px solid black", // 경계선 굵기?
            overflow: "hidden", // 크기 초과되는 내용 숨기기
            borderRadius: "60px", // 모서리를 똥글똥글
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // 그림자 추가
            position: "relative", // 상위 컨테이너 기준 설정
          }}
        >
        <div 
        style={{
            position: "absolute", // 부모 요소를 기준으로 위치 설정
            top: "0", // 맨위에 위치
            left: "50%", // 가운데 위치
            transform: "translateX(-50%)", // 정확히 가운데로 이동
            width: "190px", // 노치 너비
            height: "40px", // 노치 높이
            backgroundColor: "black", // 노치 색상
            borderBottomLeftRadius: "26px", // 아래쪽 모서리 둥글게
            borderBottomRightRadius: "26px", // 아래쪽 모서리 둥글게
            //display: "flex", // 내부 요소 배치를 위한 Flexbox
            //justifyContent: "space-between", // 내부 요소 간격
            //alignItems: "center", // 세로 중앙 정렬
            //padding: "0 20px", // 내부 여백 추가
        }}
      ></div>

        <div 
        style={{
            position : "absolute", 
            top : "10px",
            left: "143px",
            width: "12px",
            height: "12px",
            backgroundColor: "dimgray",
            borderRadius: "50%", // 동그라미 모양
        }}
        ></div>

        <div
        style={{
            position : "absolute",
            top : "12.5px",
            left: "175px",
            width: "80px",
            height: "6px",
            backgroundColor: "dimgray",
            borderRadius: "3px",
        }}></div>

        <div className="text-[20px]"
          style={{
            position : "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontWeight : "600",
          }}
          >hello world</div>
        </div>
      );
    };

export default Mobile;