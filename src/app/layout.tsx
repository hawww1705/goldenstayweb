import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";

export const metadata: Metadata = {
  title: "Golden Stay 1888 Semarang - Kos Eksklusif & Modern",
  description: "Kos eksklusif di Jl. Supriyadi No.188 Semarang. Kamar mandi dalam, AC, WiFi kencang, dan parkir 24 jam.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-[#fcf9f5] text-slate-900 antialiased min-h-screen flex flex-col font-['Plus_Jakarta_Sans']">
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
