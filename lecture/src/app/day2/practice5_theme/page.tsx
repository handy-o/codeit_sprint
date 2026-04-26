// 1) 나만의 회사 디자인 시스템 구축 실습

export default function Home() {
    return (
        // noto sans kr 폰트 적용
        <div className="min-h-screen bg-gray-100 font-noto-sans-kr">
            {/* 헤더 섹션 */}
            <header className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3">
                {/* 여기에 헤더 내용 구현 */}
                {/* 텍스트에 flow-blue 색상 적용 */}
                <h1 className="text-2xl font-semibold text-flow-blue">헤더</h1>
                <div className="flex gap-2">
                    <button className="rounded-md bg-gray-200 px-4 py-2">로그인</button>
                    {/* 회원가입 버튼에 배경색을 flow-blue로 설정 */}
                    <button className="rounded-md px-4 py-2 text-white bg-flow-blue">
                        회원가입
                    </button>
                </div>
            </header>

            <main className="container mx-auto p-4">
                {/* 통계 카드 섹션 */}
                <section className="mb-8">
                    {/* 텍스트에 flow-purple 색상 적용 */}
                    <h2 className="mb-4 text-2xl font-semibold text-flow-purple">
                        대시보드 개요
                    </h2>

                    {/* 텍스트에 보조 색상 적용 */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 text-flow-teal">
                        카드
                    </div>
                </section>

                {/* 최근 활동 섹션 */}
                <section className="mb-8">
                    {/* 여기에 최근 활동 목록 구현 */}
                    최근 활동
                </section>

                {/* CTA 섹션 */}
                <section className="mb-8">
                    {/* 강조 색상 적용 */}
                    <button className="rounded-md px-4 py-2 text-white bg-flow-orange">
                        CTA 버튼
                    </button>
                </section>
            </main>
        </div>
    );
}
