import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

type CardProps = {
    children: React.ReactNode;
    variant?: "default" | "outlined" | "elevated";
    padding?: "none" | "sm" | "md" | "lg";
    radius?: "none" | "sm" | "md" | "lg" | "full";
    className?: string;
};

const CardVariants = cva(
    // 기본 스타일
    "overflow-hidden transition-all max-w-md",

    // 카드 변형
    {
        variants: {
            variant: {
                default: "bg-white border border-gray-200",
                outlined: "bg-white border border-gray-500 hover:border-gray-400 transition-colors",
                elevated: "bg-white shadow-lg hover:shadow-xl transition-shadow"
            },
            // 패딩 설정
            padding: {
                none: "p-0",
                sm: "p-3",
                md: "p-5",
                lg: "p-8"
            },
            // 테두리 반경
            radius: {
                none: "rounded-none",
                sm: "rounded-sm",
                md: "rounded-md",
                lg: "rounded-lg",
                full: "rounded-full",
            }
        },
    },
)

const Card = ({
    children,
    variant = "default",
    padding = "md",
    radius = "md",
    className,
}: CardProps) => {
    const cardClasses = twMerge(
        clsx(CardVariants({ variant, padding, radius, className }))
        //  clsx(CardVariants({ variant, padding, radius }), className)
    );

    return <div className={cardClasses}>{children}</div>;
};

export default Card;