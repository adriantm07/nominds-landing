import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "nominds — Inteligencia documental para notarías",
  description:
    "nominds lee, extrae y valida la información de documentos legales y de identidad con inteligencia artificial, eliminando el trabajo manual en tus procesos notariales.",
  openGraph: {
    title: "nominds — Inteligencia documental para notarías",
    description:
      "Automatiza la extracción de datos de documentos legales con IA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
