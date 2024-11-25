import type { Metadata } from "next";
import "../styles/globals.css"; // Importa el archivo CSS global

export const metadata: Metadata = {
  title: "Balance de Carga",
  description: "Gestionar el balance de carga de la facultad d Ceberseguridad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="flex ">
        <body>{children}</body>
      </div>
    </html>
  );
}
