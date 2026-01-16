import type { Metadata } from "next";
import { Inter, Crimson_Text, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const crimson = Crimson_Text({
  variable: "--font-crimson",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | OHM RATHOD",
  description: "Luxury portfolio showcasing creative work and passion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${crimson.variable} ${jetbrains.variable} antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
