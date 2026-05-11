"use client";

import { useState } from "react";

export default function Home() {
    // 1. 뒤집힌 상태 저장
    const [isFlipped, setIsFlipped] = useState(false);

    // 2. 애니메이션 상태 저장
    const [isAnimating, setIsAnimating] = useState(false);


    return (
        <div className="flex min-h-screen items-center justify-center">
            <div
                className="cursor-pointer perspective-midrange"
                onClick={() => {
                    if (isAnimating) return; // 애니메이션 진행 중이면 아무것도 하지마
                    setIsFlipped(!isFlipped)
                }}
            >
                {/* 2. transform-3d: 3d 개념 추가해주기  */}
                {/* 3. transition-transform duration-700: 애니메이션 추가해줘  */}
                {/* 4. perspective-midrange: (추가) 원근감 추가하기 - 3d요소 보다 상위에 적용  https://tailwindcss.com/docs/perspective */}
                {/* 5. onTransitionStart: (추추가) transition Event */}
                <div className={`relative h-96 w-64 transition-transform duration-700 transform-3d ${isFlipped ? "rotate-y-180" : ""}`}
                    onTransitionStart={() => {
                        setIsAnimating(true)
                    }}
                    onTransitionEnd={() => {
                        setIsAnimating(false)
                    }}
                >
                    <div className="absolute flex h-full w-full items-center justify-center rounded-xl bg-white p-4 shadow-lg">
                        <div>카드앞면</div>
                    </div>
                    {/* 1. backface-hidden: 뒷면이면 안보이게 해줘 */}
                    <div className="backface-hidden absolute flex h-full w-full rotate-y-180 items-center justify-center rounded-xl bg-blue-500 p-4 text-white shadow-lg">
                        <div>카드뒷면</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
