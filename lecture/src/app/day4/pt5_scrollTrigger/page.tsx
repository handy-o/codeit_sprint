import * as motion from "motion/react-client";

export default function Home() {
    return (
        <div className="flex h-[400dvh] items-center justify-center">
            <motion.div className="h-[300px] w-48 bg-blue-200"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.8 }}
                transition={{ duration: 0.8 }}
            >
                큰 박스
            </motion.div>
        </div>
    );
}