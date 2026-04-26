export default function Home() {
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="max-w-sm border border-gray-200 rounded-xl shadow-md bg-white overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=2151&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
                <div className="p-4">
                    <h5 className="text-2xl font-bold tracking-tighter text-gray-800 mb-2">2024년 기술 동향</h5>
                    <p className="text-sm text-gray-700 mb-2">
                        최신 기술 동향에 대한 기사를 통해 혁신적인 아이디어와 트렌드를
                        탐구해보세요. 이 글에서는 인공지능과 머신러닝의 발전이 우리 생활에
                        미치는 영향을 다룹니다.
                    </p>
                    <button className="rounded-lg bg-blue-700 text-white p-2 text-xs font-medium">더보기</button>
                </div>
            </div>
        </div>
    )
}