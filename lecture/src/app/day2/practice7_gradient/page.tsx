import Image from "next/image";

const Home = () => {
    return (
        <>
            {/* 3) 그라디언트 텍스트 연습하기 */}
            <div className="flex h-screen items-center justify-center">
                <span className="text-9xl font-extrabold bg-linear-to-r from-[#15c064] from-20% to-[#00d1ff] bg-clip-text text-transparent leading-[1.1]">Codify</span>
            </div>


            {/* 2) 그라디언트 아이콘 연습하기 */}
            <div className="flex h-screen items-center justify-center">
                {/* <span className="w-[24px] h-[24px] rounded-full bg-linear-45 from-[#096cde] from-30% to-[#ddf1ff]" /> */}
                <span className="size-6 rounded-full bg-linear-to-tr from-[#096cde] from-30% to-[#ddf1ff] shadow-[5px_5px_10px_#096cde]" />
            </div>


            {/* 1) unsplash, pinterest와 같은 이미지 나열하기 */}
            <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
                <Image
                    alt="Image 1"
                    width={300}
                    height={500}
                    src="https://images.unsplash.com/photo-1742943679521-f4736500a471?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
                    className="mb-4 rounded-3xl"
                />
                <Image
                    alt="Image 2"
                    width={300}
                    height={500}
                    src="https://images.unsplash.com/photo-1742925602178-0f5939ee6845?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
                    className="mb-4 rounded-3xl"
                />
                <Image
                    alt="Image 3"
                    width={300}
                    height={500}
                    src="https://plus.unsplash.com/premium_photo-1742202420319-e933c71d4495?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
                    className="mb-4 rounded-3xl"
                />
                <Image
                    alt="Image 4"
                    width={300}
                    height={500}
                    src="https://images.unsplash.com/photo-1743031031851-bffbe65f338f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
                    className="mb-4 w-full rounded-3xl"
                />
                <Image
                    alt="Image 5"
                    width={300}
                    height={500}
                    src="https://images.unsplash.com/photo-1743010768826-cc10a67e3b3a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
                    className="mb-4 w-full rounded-3xl"
                />
                <Image
                    alt="Image 6"
                    width={300}
                    height={500}
                    src="https://images.unsplash.com/photo-1741812191037-96bb5f12010a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"
                    className="mb-4 w-full rounded-3xl"
                />
                <Image
                    alt="Image 7"
                    width={300}
                    height={500}
                    src="https://images.unsplash.com/photo-1742576948659-3c630862a38d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D"
                    className="mb-4 w-full rounded-3xl"
                />
            </div>
        </>
    );
};

export default Home;
