"use client";

import { useMotionValue, motion, animate, useTransform } from "motion/react";
import { useEffect } from "react";

export default function Counter() {
    // 1. 리렌더링과 독립적으로 관리되는 motion value 생성
    const motionValue = useMotionValue(0);

    // 소숫점까지 나오는 형태를 정수 형태로 변경되게 하라는 추가 작업 필요
    // 3. motion value를 주시하고, 새로운 motion value(toFixed)를 생성
    const toFixed = useTransform(motionValue, (업뎃모션밸류) => 업뎃모션밸류.toFixed(0)); // 업뎃모션밸류 = latest


    // rendering과 관계없이 독립적으로 실행되어야 하므로 useEffect안에 넣어줌
    useEffect(() => {
        // 2. motionValue 객체의 값을 현재 값(0)에서 목표 값인 100으로 2초 동안 부드럽게 변경
        const ctrl = animate(motionValue, 100, { duration: 2 }) // (바꾸려는 값(0), 바꿀 값, {옵션})

        return () => ctrl.stop();
    }, [motionValue])

    return (
        <div className="flex h-screen items-center justify-center">
            <motion.pre className="text-4xl">{toFixed}</motion.pre>
        </div>
    );
}
