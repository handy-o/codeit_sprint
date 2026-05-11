"use client";

import { motion } from "motion/react";
import { useRef, useState } from "react";

export default function StartPage({ onStart }: { onStart: () => void }) {
    const [isAnimating, setIsAnimating] = useState(true);
    const hasCompleted = useRef(false);

    const [isPressed, setIsPressed] = useState(false);
    const variants = {
        pressed: { scale: 0.7 },
        idle: { scale: 1 }
    }

    return (
        <motion.div className="text-center">
            <motion.h1 className="mb-8 text-4xl font-bold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    duration: 0.4,
                    delay: 0.4
                }}
            >MBTI 테스트</motion.h1>
            <motion.button
                onClick={onStart}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 3
                }}
                whileHover={{
                    scale: 1.1, transition: {
                        duration: 0.4
                    }
                }}
                whileTap={{
                    scale: 0.95, transition: {
                        duration: 0.4
                    }
                }}
                onAnimationComplete={() => {
                    if (!hasCompleted.current) {
                        setIsAnimating(false);
                        hasCompleted.current = true;
                    }
                }}
                disabled={isAnimating}
                className="rounded-lg bg-blue-500 px-6 py-3 text-lg text-white"
            >
                시작하기
            </motion.button>
            <motion.button
                animate={isPressed ? "pressed" : "idle"}
                className="bg-blue-500 p-2"
                variants={variants}
                transition={{ duration: 1.2, ease: "easeIn" }}
                onClick={() => { }}
            >

            </motion.button>
        </motion.div >
    );
}
