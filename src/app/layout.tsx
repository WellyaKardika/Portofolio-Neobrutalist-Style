import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rachel Graceya Emanuella | Business Analyst & Business Development Portfolio",
  description: "Professional portfolio of Rachel Graceya Emanuella. Bridging detailed enterprise business requirements and high-performance custom React development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white dark:bg-zinc-950 text-black dark:text-white antialiased transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
