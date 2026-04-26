/*
다크 모드 체크용 layout.css 복제본
추후 수정될 수 있기에 해당 폴더에 저장해둡니다.
*/

// import { ThemeProvider } from "@/providers/ThemeProviders";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // OS 기반 다크 모드
    // return (
    //   <html lang="en" suppressHydrationWarning>
    //     <body>{children}</body>
    //   </html>
    // );

    // 2) 수동 다크 모드
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    enableColorScheme={false}
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}