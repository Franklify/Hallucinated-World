import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const merriweather = Merriweather({ 
  weight: ['300', '400', '700', '900'], 
  subsets: ["latin"], 
  variable: '--font-merriweather' 
});

export const metadata: Metadata = {
  title: "The Hallucinated World",
  description: "Legal Accountability in the Age of Generative Reality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${merriweather.variable} bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}