"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
    const [items, setItems] = useState([...Array(10)].map((_, i) => i + 1));
    const [isLoading, setIsLoading] = useState(false);

    const loadMoreItems = async () => {
        if (isLoading) return;
        setIsLoading(true);

        // API 호출 가정
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setItems((prevItems) => [
            ...prevItems,
            // 이전 item 개수 + 1 부터 10개 더하기
            ...[...Array(10)].map((_, i) => prevItems.length + i + 1),
        ]);
        setIsLoading(false);
    };


    const { ref, inView } = useInView({
        threshold: 1,
        onChange: (inView) => { // inView가 바뀌면~ {실행하세요}
            if (inView && !isLoading) {
                loadMoreItems()
            }
        }
    })

    // useEffect(() => {
    //     if (inView) {
    //         loadMoreItems();
    //     }
    // }, [inView]);


    return (
        <div className="container mx-auto">
            <div className="flex flex-col gap-4">
                {items.map((item) => (
                    <div className="h-48 border border-gray-500" key={item}>
                        {item}
                    </div>
                ))}
            </div>
            {/* 해당 div가 뷰포트에 다 보일 때 더 로드 */}
            <div ref={ref} className="py-4 text-center">
                {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                        <div className="h-4 w-4 animate-pulse rounded-full bg-blue-500"></div>
                        <div className="h-4 w-4 animate-pulse rounded-full bg-blue-500"></div>
                        <div className="h-4 w-4 animate-pulse rounded-full bg-blue-500"></div>
                        <span className="text-gray-500">로딩 중...</span>
                    </div>
                ) : (
                    <span className="text-gray-400">더 로드하려면 스크롤하세요</span>
                )}
            </div>
        </div>
    );
}
