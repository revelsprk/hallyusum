import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hallyu Sum",
  description: "Instantly check MV view counts and rankings, all in one place."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
