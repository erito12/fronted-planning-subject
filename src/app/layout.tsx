import type { Metadata } from "next";

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
      <div>
        <header>
          <h1>Mi Aplicación</h1>
          {/* Aquí puedes agregar un menú de navegación */}
        </header>
        <body>{children}</body>
        <footer>
          <p>© 2024 Mi Aplicación</p>
        </footer>
      </div>
    </html>
  );
}
