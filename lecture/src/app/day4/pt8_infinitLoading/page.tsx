"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function Home() {
    const [items, setItems] = useState([...Array(10)].map((_, i) => i + 1));
    const [isLoading, setIsLoading] = useState(false);

    // 감지할 요소에 연결할 ref
    const targetRef = useRef<HTMLDivElement | null>(null);


    // ✅ useCallback으로 감싸기 : 이유??????????????????
    // 함수 참조를 고정시킴 (렌더링이 다시 돼도 같은 함수 유지) → useEffect가 불필요하게 재실행 안 됨
    const loadMoreItems = useCallback(async () => {
        setIsLoading(true);

        // API 호출 가정
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setItems((prevItems) => [
            ...prevItems,
            // 이전 item 개수 + 1 부터 10개 더하기
            ...[...Array(10)].map((_, i) => prevItems.length + i + 1),
        ]);
        setIsLoading(false);
    }, []);


    // ✅ 1. observer 생성
    // IntersectionObserver에는 콜백함수가 들어가야한다.
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            // loadMoreItems();
            if (entries[0].isIntersecting) { // 감지를 하면, 
                loadMoreItems(); // 추가 요청
            }
        }, {
            threshold: 1, // ref가 다 보이면 실행 
        },);


        // 설정
        const currentRef = targetRef.current;
        if (currentRef) {
            observer.observe(currentRef)
        }

        // 해제
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        }
    }, [loadMoreItems])

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
            <div ref={targetRef} className="py-4 text-center">
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
