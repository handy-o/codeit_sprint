"use client";

import { frame, motion, useSpring } from "motion/react";
import { RefObject, useEffect, useRef } from "react";

export default function Drag() {
    const ref = useRef<HTMLDivElement>(null);
    const { x, y } = useFollowPointer(ref);

    return (
        <motion.div
            ref={ref}
            style={{
                width: 100,
                height: 100,
                backgroundColor: "#ff0088",
                borderRadius: "50%",
                x,
                y,
            }}
        />
    );
}

const spring = { damping: 3, stiffness: 50 };

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
    const x = useSpring(0, spring);
    const y = useSpring(0, spring);

    useEffect(() => {
        if (!ref.current) return;

        const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
            const element = ref.current!;

            // 현재 포인터 위치를 읽어와서 x, y 값을 설정
            frame.read(() => {
                // clientX: 현재 마우스 위치의 x 좌표
                // element.offsetWidth / 2: 요소의 너비 절반 -> 마우스 포인터를 요소의 중심으로 맞추기 위해 절반만큼 빼줌
                // 최종적으로 x.set(clientX - element.offsetWidth / 2)는 마우스 포인터를 요소의 중심으로 맞추기 위해 계산한 값
                x.set(clientX - element.offsetWidth / 2);
                y.set(clientY - element.offsetHeight / 2);
            });
        };

        window.addEventListener("pointermove", handlePointerMove);

        return () => window.removeEventListener("pointermove", handlePointerMove);
    }, [ref, x, y]);

    return { x, y };
}
