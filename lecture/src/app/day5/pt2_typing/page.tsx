"use client";

import { useState, useEffect } from "react";
import * as m from "motion/react-m"

export const TypingEffect = ({
    text,
    typingSpeed = 150,
}: {
    text: string;
    typingSpeed?: number;
}) => {
    // 현재 입력된 텍스트
    const [displayText, setDisplayText] = useState("");
    // 현재 입력된 텍스트의 인덱스
    const [currentIndex, setCurrentIndex] = useState(0);



    useEffect(() => {
        console.log('text.length', text.length)
        console.log('currentIndex', currentIndex)
        if (text.length > currentIndex) {
            const timer = setTimeout(() => {
                // setDisplayText(text.slice(0, currentIndex + 1));
                setDisplayText((prev) => prev + text[currentIndex])
                setCurrentIndex((prev) => prev + 1)
            }, typingSpeed)
            return () => clearTimeout(timer);
        }

    }, [currentIndex, text, typingSpeed])


    return (
        <div className="font-mono text-2xl">
            {/* 현재 입력된 텍스트 */}
            {displayText}
            {/* 깜빡거리는 타이핑 커서 */}
            <m.span className="ml-1 inline-block h-5 w-2 bg-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                // animate={{ opacity: [0,1,0]}} 이 속성으로 initial+animate 동일 효과
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}

            />
        </div>
    );
};

// 사용 예시
export default function TypingEffectExample() {
    return (
        <div className="p-8">
            <TypingEffect text="오늘은 러닝 어떤가요?" typingSpeed={100} />
        </div>
    );
}
