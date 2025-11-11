import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';
import AOSInit from './components/AOSInit';
import ParticlesBackground from './components/ParticlesBackground';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "INERA - Institut National pour l'Étude et la Recherche Agronomiques",
  description: "Site officiel de l'INERA - République Démocratique du Congo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <ParticlesBackground />
        <AOSInit />
        <Navbar />
        <main className="pt-28 relative z-10">{children}</main>
      </body>
    </html>
  );
}
