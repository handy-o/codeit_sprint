// ### **⚠️ 요구 사항**

// 1. 카운터 컴포넌트를 만들고, **“해당 요소가 화면에 모두 보이면”** **0에서 100까지 숫자가 증가**하는 애니메이션을 구현하세요.
// 2. `useInView`를 사용하여 화면 진입을 감지하세요.
// 3. 화면에서 벗어나면 카운트가 멈추게 하세요.

"use client";

import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";


export default function Home() {
    const ref = useRef(null);
    const [count, setCount] = useState(0);
    // ✅ 1. isInView 훅을 사용해 false/true 반환하는 객체 생성
    const isInView = useInView(ref, {
        amount: 1
    })

    useEffect(() => {
        console.log('isInView', isInView)
        if (isInView) { // ✅ 3. 조건 설정 (또는  if(!isInView) return )
            const interval = setInterval(() => {
                setCount((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        return 100;
                    }
                    return prev + 1;
                });
            }, 20);
            return () => clearInterval(interval);
        }
    }, [isInView]); // ✅ 2. 의존성에 추가

    return (
        <div className="flex h-[400dvh] items-center justify-center">
            <div
                ref={ref}
                className="flex h-48 w-48 items-center justify-center bg-green-200 text-4xl font-bold"

            >
                {count}
            </div>
        </div>
    );
}
