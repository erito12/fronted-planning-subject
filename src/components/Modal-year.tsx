// components/ModalCrearCurso.tsx
import React, { useState } from "react";

interface ModalCreateYearProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (year: { name_year: string /* otras propiedades */ }) => void;
}

const ModalCreateYear: React.FC<ModalCreateYearProps> = ({
  isOpen,
  onClose,
  onCreate,
}) => {
  const [nameYear, setNameYear] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate({ name_year: nameYear /* otras propiedades */ });
    setNameYear("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Crear Nuevo Año</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="nameCourse"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre del Año{" "}
              <h2 className="text-lg font-semibold mb-4">Crear Nuevo Año</h2>
            </label>
            <input
              type="text"
              id="nameCourse"
              value={nameYear}
              onChange={(e) => setNameYear(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Crear Curso
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
            >
              Cerrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalCreateYear;
