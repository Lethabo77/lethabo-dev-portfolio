import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lethabo Baloyi | Full-Stack Developer",
  description:
    "Portfolio of Lethabo Baloyi — Full-Stack Developer building modern web applications, digital systems, APIs and business solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}