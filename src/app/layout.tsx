import type { Metadata } from "next";

import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Andreas Takvam | Portfolio",
    description:
        "I am a full-stack developer with a passion for creating innovative web applications.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${manrope.variable}  antialiased`}>
                <ThemeToggle />
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
}
