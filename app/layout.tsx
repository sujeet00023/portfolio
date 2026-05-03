import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sujeet Khupase | Full Stack Developer",
  description: "Full Stack Developer with 1.5+ years of experience building scalable web applications using React.js, Node.js, and TypeScript.",
  keywords: ["Full Stack Developer", "React.js", "Next.js", "Node.js", "TypeScript", "Pune"],
  openGraph: {
    title: "Sujeet Khupase | Full Stack Developer",
    description: "Building scalable web applications with React.js, Node.js & TypeScript.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">   {/* Added scroll-smooth */}
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}