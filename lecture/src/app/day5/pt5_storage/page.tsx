"use client";

import { useEffect, useState } from "react";

type FriendType = {
    name: string;
    age: string;
    gender: string;
};
export default function Home() {
    // 친구 목록과 새 친구 정보를 저장할 변수
    // hydration error 발생..
    // const [friends, setFriends] = useState<FriendType[]>(() => {

    //     if (typeof window !== "undefined") {
    //         const haveFriends = localStorage.getItem('친구목록');
    //         if (haveFriends) {
    //             return JSON.parse(haveFriends);
    //         }
    //     }
    //     return []
    // });
    // ./ hydration error 발생..
    const [newFriend, setNewFriend] = useState<FriendType>({
        name: "",
        age: "",
        gender: "남자",
    });



    // hydration 해결 방법 
    // 1. 상단 useState 지우고
    // 2. useEffect로 불러오기.. 편법으로 함수안에 넣어서 실행시킴
    // 3. 정석은 dynamic import (컴포넌트 분리 + dynamic import)
    const [friends, setFriends] = useState<FriendType[]>([]);
    useEffect(() => {
        const initFriends = () => {
            const savedFriends = localStorage.getItem("친구목록");
            if (savedFriends) {
                setFriends(JSON.parse(savedFriends));
            }
        };
        initFriends();
    }, []);






    // 친구를 추가하는 함수
    function addFriend() {
        if (newFriend.name === "" || newFriend.age === "") {
            return alert("이름과 나이를 입력해주세요.");
        }

        const newFriendList = [...friends, newFriend];
        setFriends(newFriendList);

        // console.log('friends', friends) // 근데 얘는 왜 바로 업데이트가 안되는걸까
        // console.log('newFriendList', newFriendList) // 리스트에는 바로 업데이트가 되는데. 마운트머시기 때문?
        localStorage.setItem("친구목록", JSON.stringify(newFriendList))

        // 입력창 초기화
        setNewFriend({
            name: "",
            age: "",
            gender: "남자",
        });
    }

    return (
        <div className="flex min-h-screen flex-col items-center bg-blue-100 p-8">
            <h1 className="mb-6 text-3xl font-bold text-blue-800">내 친구 목록</h1>

            {/* 친구 추가 폼 */}
            <div className="mb-8 flex w-full max-w-md flex-col gap-4">
                <input
                    type="text"
                    value={newFriend.name}
                    onChange={(e) => setNewFriend({ ...newFriend, name: e.target.value })}
                    placeholder="친구 이름 입력"
                    className="rounded border border-blue-300 px-4 py-2"
                />
                <input
                    type="number"
                    value={newFriend.age}
                    onChange={(e) => setNewFriend({ ...newFriend, age: e.target.value })}
                    placeholder="나이 입력"
                    className="rounded border border-blue-300 px-4 py-2"
                />
                <select
                    value={newFriend.gender}
                    onChange={(e) =>
                        setNewFriend({ ...newFriend, gender: e.target.value })
                    }
                    className="rounded border border-blue-300 px-4 py-2"
                >
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
                <button
                    onClick={addFriend}
                    className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                >
                    친구 추가
                </button>
            </div>

            {/* 친구 목록 */}
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
                <h2 className="mb-4 text-xl text-blue-600">
                    친구들 ({friends.length}명)
                </h2>

                {friends.length === 0 ? (
                    <p className="text-gray-500">
                        아직 친구가 없어요. 친구를 추가해보세요!
                    </p>
                ) : (
                    <ul className="space-y-2">
                        {friends.map((friend, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-between rounded bg-blue-50 p-3"
                            >
                                <span className="font-medium text-blue-700">
                                    👫 {friend.name} ({friend.age}세, {friend.gender})
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
