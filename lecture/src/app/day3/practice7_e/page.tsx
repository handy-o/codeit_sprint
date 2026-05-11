"use client";

import { useState } from "react";

type Status = "idle" | "running" | "done"; // idle: 휴식중

export default function ProgressBar() {
    // 1. status: 현재 다운로드 진행 상황
    const [status, setStatus] = useState<Status>("idle");

    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-6">
            <button
                // 2. 버튼 클릭 시 다운로드 시작
                onClick={() => {
                    setStatus("running");
                }}
                // 다운로드 시작 후에는 disabled 처리
                disabled={status !== "idle"}
                className="rounded bg-blue-500 px-6 py-2 text-white disabled:opacity-50"
            >
                다운로드
            </button>

            {/* 프로그레스 바 */}
            <div className="h-6 w-80 overflow-hidden rounded-full bg-gray-200">
                <div
                    // tailwind css로 duration을 따로 적용할 수 없어서 inline style로 적용
                    style={{
                        transitionProperty: "background-color, width",
                        transitionDuration: "0.8s, 3s", // background-color는 0.8초, width는 3초
                        transitionTimingFunction: "ease-in-out",
                    }}
                    className={`h-full rounded-full ${status === "idle" ? "w-0 bg-blue-500" : "w-full bg-green-500"
                        }`}
                    onTransitionEnd={(e) => {
                        console.log("onTransitionEnd 이벤트 호출 횟수 확인하기"); // console이 두번 찍히는 이유: 트랜지션 2개 돌림
                        // !! 해결방법 !!
                        // e.propertyName이 width일 때 작동시켜
                        if (e.propertyName === 'width' && status === "running") {
                            setStatus("done");
                        }
                        // !! ./해결방법 !!
                    }}
                />
            </div>

            <p className="text-lg font-medium">
                {status === "idle" && "대기 중"}
                {status === "running" && "다운로드 중..."}
                {status === "done" && "다운로드 완료!"}
            </p>
        </div>
    );
}
