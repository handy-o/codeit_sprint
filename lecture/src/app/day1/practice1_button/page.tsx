export default function Home() {
    return (
        <div className="flex gap-2 justify-center items-center h-screen">
            <button
                type="button"
                className="bg-blue-500 text-white text-sm border border-gray-300 rounded-lg py-1.5 px-4"
            >
                Default
            </button>
            <button
                type="button"
                className="border border-gray-300 rounded-lg py-1.5 px-4"
            >
                Alternative
            </button>
            <button
                type="button"
                className="bg-gray-900 text-white text-sm border border-gray-1 rounded-lg py-1.5 px-4"
            >
                Dark
            </button>
            <button
                type="button"
                className="border border-gray-300 rounded-lg py-1.5 px-4"
            >
                Light
            </button>
            <button
                type="button"
                className="bg-green-700 text-white text-sm border border-gray-300 rounded-lg py-1.5 px-4"
            >
                Green
            </button>
            <button
                type="button"
                className="bg-red-800 text-white text-sm border-gray-300 rounded-lg py-1.5 px-4"
            >
                Red
            </button>
            <button
                type="button"
                className="bg-yellow-500 text-white text-sm border-gray-300 rounded-lg py-1.5 px-4"
            >
                Yellow
            </button>
            <button
                type="button"
                className="bg-purple-600 text-white text-sm border-gray-300 rounded-lg py-1.5 px-4"
            >
                Purple
            </button>
        </div>
    );
}