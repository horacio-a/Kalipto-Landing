import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Velas de Soja Artesanales | Kalipto Velas | Alto Valle",
  description:
    "Descubre velas de soja artesanales únicas, elaboradas con cera de soja natural y aromas exquisitos. Disfruta de fragancias para cada ocasión y aprende a crear tus propias velas en nuestros cursos. Envío a domicilio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
