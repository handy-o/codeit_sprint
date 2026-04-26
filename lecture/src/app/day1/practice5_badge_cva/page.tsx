import Badge from "@/components/Badge";

export default function Home() {
    // Badge/index.tsx
    return (
        <div className="space-x-2 p-4">
            <Badge>default</Badge>
            <Badge variant="secondary">secondary</Badge>
            <Badge variant="destructive">destructive</Badge>
            <Badge variant="outline">outline</Badge>
            <Badge className="bg-blue-500 text-white">custom</Badge>
        </div>
    );

}