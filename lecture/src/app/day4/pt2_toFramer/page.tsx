import * as motion from "motion/react-client";
import Link from "next/link";

export default function pt2_toFramer() {
    return (
        <div className="flex h-screen items-center justify-center gap-2">
            <motion.div className="h-96 w-72 rounded-lg border shadow-md"
                initial={{
                    y: 20,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
            ></motion.div>
            <Link className="text-blue-500 underline" href="/day4/pt3_pageTransition">
                pt3 홈으로
            </Link>
        </div>
    );
}