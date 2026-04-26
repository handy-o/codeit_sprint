export default function Home() {
    return (
        <div className="flex h-screen items-center justify-center">
            <form className="max-w-sm w-full">
                <div className="mb-5">
                    <label htmlFor="email" className="text-md font-bold text-gray-700">
                        이메일
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="block w-full border border-gray-300 bg-gray-50 rounded-md p-3 mt-2"
                        placeholder="abc@gmail.com"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="text-md font-bold text-gray-700">
                        비밀번호
                    </label>
                    <input type="password" id="password" className="block w-full border border-gray-300 bg-gray-50 rounded-md p-3 mt-2" required />
                </div>
                <div className="flex gap-2">
                    <div className="">
                        <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className=""
                            required
                        />
                    </div>
                    <label htmlFor="remember" className="font-bold text-sm text-gray-700">
                        로그인 상태 유지
                    </label>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-gray-200 p-2 rounded-lg mt-3">
                    Submit
                </button>
            </form>
        </div>
    );
}