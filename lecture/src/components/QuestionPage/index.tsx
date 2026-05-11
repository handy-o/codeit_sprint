"use client";

import { motion, Variants } from "motion/react";

interface QuestionPageProps {
    question: {
        question: string;
        options: string[];
    };
    onAnswer: (answer: string) => void;
}

export default function QuestionPage({
    question,
    onAnswer,
}: QuestionPageProps) {

    const delayVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.8,
                type: "spring"
            }
        })
    }
    return (
        <div className="w-full max-w-2xl px-4">
            <motion.h2 className="mb-8 text-center text-2xl font-bold"
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    duration: 0.6
                }}>

                {question.question}
            </motion.h2>
            <div className="space-y-4">
                {question.options.map((option, index) => (
                    <motion.button
                        key={index}
                        onClick={() => onAnswer(option)}
                        className="w-full rounded-lg bg-white p-4 text-left shadow"
                        custom={index}
                        variants={delayVariants}
                        initial="hidden"
                        animate="visible"
                        // initial={{ y: 30, opacity: 1 }}
                        // animate={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.03, boxShadow: "0px 5px 10px rgba(0,0,0,0.2)" }}
                    >
                        {option}
                    </motion.button>
                ))}
            </div>
        </div>
    );
}