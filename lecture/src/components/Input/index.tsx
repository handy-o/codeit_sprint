import clsx from "clsx";
import { twMerge } from "tailwind-merge";



export default function Input({
    className,
    type = "text",
    ...props
}: React.ComponentProps<"input">) {
    const InputClasses = twMerge(
        clsx(
            "border border-gray-300 rounded-md px-3 py-1 shadow-xs",
            className
        )
    )
    return (
        <input
            type={type}
            className={InputClasses}
            {...props}
        />
        // 또는 바로 입력

        //     <input
        //   type={type}
        //   className={twMerge(
        //     clsx(
        //       "border border-gray-300 rounded-md px-3 py-1 shadow-xs w-full",
        //       className
        //     )
        //   )}
    );
}
