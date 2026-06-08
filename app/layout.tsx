import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shivam Jawaliya | Full Stack Developer",
  description:
    "Full-stack developer building end-to-end web products using Next.js, React, and Node.js. Based in Bhopal, India.",
  keywords: [
    "Shivam Jawaliya",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Shivam Jawaliya" }],
  openGraph: {
    title: "Shivam Jawaliya | Full Stack Developer",
    description:
      "Full-stack developer building end-to-end web products using Next.js, React, and Node.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
