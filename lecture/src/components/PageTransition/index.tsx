"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const hasMounted = useRef(false);
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={hasMounted.current ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}



// import * as motion from "motion/react-client";

// export default function PageTransition({
//     children,
// }: {
//     children: React.ReactNode;
// }) {
//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//         >
//             {children}
//         </motion.div>
//     );
// }
