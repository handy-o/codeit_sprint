// src/components/PasswordInput/index.tsx

"use client";

import { useState } from "react";

export const PasswordInput = () => {
    const [isShowPassword, setIsShowPassword] = useState(false); // setIsClicked  보다 해설의 함수명이 더 명확함

    const toggleShowPassword = () => { //  handlePWView 보다 해설의 함수명이 더 직관적
        setIsShowPassword(!isShowPassword)
    }
    return (
        <div>
            <input placeholder="비밀번호를 입력하세요." type={isShowPassword ? "text" : "password"} />
            <button onClick={toggleShowPassword}>{isShowPassword ? "숨기기" : "보기"}</button>
        </div>
    );
};
