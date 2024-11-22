import React from "react";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">
        Bienvenido a la Gestión de Cursos
      </h1>
      <p className="mb-8">Administra tus cursos de manera eficiente.</p>
      <Link href="/gestionar-cursos">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Ir a Gestión
        </button>
      </Link>
    </div>
  );
};

export default Home;
