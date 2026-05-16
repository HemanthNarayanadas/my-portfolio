import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Narayanadas Hemanth Kumar | Full Stack Developer",
  description: "Portfolio of Narayanadas Hemanth Kumar, a Full Stack Developer & Student Intern specializing in Java, Web Technologies, and DevOps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-900 text-slate-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}
