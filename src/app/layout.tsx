import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar"

export const metadata: Metadata = {
  title: "E-physics",
  description: "Created with ❤️ from E-physics teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className=""> {/* Добавлен отступ сверху */}
          {children}
        </main>
      </body>
    </html>
  );
}
