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