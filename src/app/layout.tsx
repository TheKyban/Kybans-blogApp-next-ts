import type { Metadata } from "next";
import "./globals.css";
import { ThemeContextProvider } from "@/Providers/ThemeProvider";
import Navbar from "@/components/navbar/Navbar";
import { Inter, Playpen_Sans, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";

/**
 * FONTS
 */

const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const playpen_sans = Playpen_Sans({
    subsets: ["latin"],
    variable: "--playpen-sans",
});

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Kybans",
    description: "a blog page made by next js",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${playpen_sans.variable} ${poppins.variable}`}
            >
                <ThemeContextProvider>
                    <div className="container">
                        <div className="content">
                            <Navbar />
                            {children}
                            <Footer />
                        </div>
                    </div>
                </ThemeContextProvider>
            </body>
        </html>
    );
}
