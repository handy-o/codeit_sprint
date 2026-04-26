export default function Home() {
    return (

        // !!!!!!!!!!!!!
        // divide-y: 마지막 자식을 제외한 모든 자식 요소의 아래에 구분선 생성
        // divide-gray-100: 구분선 색상
        // !!!!!!!!!!!!!
        <ul role="list" className="divide-y divide-gray-100 p-2">
            {/* <li className="flex justify-between p-4 border-b border-b-gray-300"> */}
            <li className="flex justify-between p-4">
                <div className="flex gap-4 items-center">
                    <img
                        className="size-15 rounded-full "
                        src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    <div className="">
                        <p className="font-bold">Michael Foster</p>
                        <p className="text-sm text-gray-500">michael.foster@example.com</p>
                    </div>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <p className="font-bold text-gray-700">Co-Founder / CTO</p>
                    <p className="text-sm text-gray-500 mt-1">
                        Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time>
                    </p>
                </div>
            </li>
            <li className="flex justify-between p-4 border-b border-b-gray-300">
                <div className="flex gap-4 items-center">
                    <img
                        className="size-15 rounded-full "
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    <div className="">
                        <p className="font-bold">Dries Vincent</p>
                        <p className="text-sm text-gray-500">dries.vincent@example.com</p>
                    </div>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <p className="font-bold text-gray-700">Business Relations</p>
                    <div className="text-sm text-gray-500 flex items-center gap-2 justify-end mt-1">
                        <div className="bg-emerald-500/20 size-4 rounded-full flex justify-center items-center">
                            <div className="bg-emerald-500 size-2 rounded-full"></div>
                        </div>
                        <p className="">Online</p>
                    </div>
                </div>
            </li>
        </ul>
    );
}
