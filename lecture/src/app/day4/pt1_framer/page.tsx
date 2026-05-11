// "use client";

// import { motion } from "motion/react";

import * as motion from "motion/react-client";

export default function Home() {
    return (
        <>
            {/* 1) 페이드인 애니메이션 */}
            <motion.div
                // className="opacity-0"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        duration: 3, // animate 안에 있는 transition이 우선 적용됨
                    },
                }}
                transition={{ duration: 1 }}
            > 안녕하세요! 페이드인 효과입니다.
            </motion.div>

            {/* 2) 슬라이드인 애니메이션 */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >왼쪽에서 슬라이드 인!</motion.div>


            {/* 3) 호버 애니메이션 */}
            <motion.button className="rounded-md border-none bg-blue-500 px-5 py-2.5 text-white"
                whileHover={{
                    scale: 1.1
                }}
                whileTap={{
                    scale: 0.9 // ta'p'
                }}
                whileFocus={{ scale: 0.9 }} // ta'b'
            >
                마우스를 올려보세요!
            </motion.button>
        </>

    )
}