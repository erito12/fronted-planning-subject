import React, { useState, useEffect } from "react";

interface ModalCrearCursoProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onCreate: (curso: { name_course: string }) => void;
  onUpdate?: (cursoId: number, curso: { name_course: string }) => void; // Nueva función opcional para actualizar
  initialName?: string; // Propiedad opcional para el nombre inicial
  cursoId?: number; // ID del curso a actualizar
}

const ModalCrearCurso: React.FC<ModalCrearCursoProps> = ({
  isOpen,
  onClose,
  onCreate,
  onUpdate,
  title,
  initialName = "",
  cursoId,
}) => {
  const [nameCourse, setNameCourse] = useState("");

  useEffect(() => {
    if (isOpen) {
      setNameCourse(initialName); // Actualiza el estado cuando el modal se abre
    }
  }, [isOpen, initialName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onUpdate && cursoId) {
      onUpdate(cursoId, { name_course: nameCourse }); // Llama a la función de actualización
    } else {
      onCreate({ name_course: nameCourse });
    }
    setNameCourse("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="nameCourse"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre del {title}:
            </label>
            <input
              type="text"
              id="nameCourse"
              value={nameCourse}
              onChange={(e) => setNameCourse(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              {cursoId ? "Actualizar Curso" : "Crear Curso"}
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

export default ModalCrearCurso;
