import Input from "@/components/Input";

export default function Home() {
    // Input/index.tsx
    return (
        <div className="space-y-2 p-4">
            {/* 기본 스타일 */}
            <Input type="text" placeholder="안녕하세요" className="w-full" />
            {/* className 추가 시 오버라이딩 */}
            <Input type="text" className="w-64 border-red-400" />
        </div>
    );
}