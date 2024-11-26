// components/ModalCrearCurso.tsx
import React, { useState } from "react";

interface ModalCrearCursoProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (curso: { name_course: string /* otras propiedades */ }) => void;
}

const ModalCrearCurso: React.FC<ModalCrearCursoProps> = ({
  isOpen,
  onClose,
  onCreate,
}) => {
  const [nameCourse, setNameCourse] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate({ name_course: nameCourse /* otras propiedades */ });
    setNameCourse("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Crear Nuevo Curso</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="nameCourse"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre del Curso:
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
          {/* Agrega más campos según sea necesario */}
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

export default ModalCrearCurso;

// // components/ModalCrearElemento.tsx
// import React, { useState } from "react";

// interface Field<T> {
//   label: string;
//   name: keyof T; // Cambiamos a keyof para que sea una clave del tipo genérico
//   type?: string;
//   required?: boolean;
// }

// interface ModalCrearElementoProps<T> {
//   isOpen: boolean;
//   onClose: () => void;
//   onCreate: (data: T) => void;
//   title: string;
//   fields: Field<T>[];
// }

// const ModalCrearElemento = <T,>({
//   isOpen,
//   onClose,
//   onCreate,
//   title,
//   fields,
// }: ModalCrearElementoProps<T>) => {
//   const [formData, setFormData] = useState<T>(
//     fields.reduce((acc, field) => {
//       acc[field.name] = "" as any; // Inicializamos como string, puedes ajustar según el tipo
//       return acc;
//     }, {} as T)
//   );

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onCreate(formData);
//     setFormData(fields.reduce((acc, field) => {
//       acc[field.name] = "" as any; // Aquí también puedes ajustar según el tipo
//       return acc;
//     }, {} as T));
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-lg w-96">
//         <h2 className="text-lg font-semibold mb-4">{title}</h2>
//         <form onSubmit={handleSubmit}>
//           {fields.map((field) => (
//             <div className="mb-4" key={field.name.toString()}>
//               <label
//                 htmlFor={field.name.toString()}
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 {field.label}:
//               </label>
//               <input
//                 type={field.type || "text"}
//                 id={field.name.toString()}
//                 name={field.name.toString()}
//                 value={formData[field.name]}
//                 onChange={handleChange}
//                 required={field.required}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500"
//               />
//             </div>
//           ))}
//           <div className="flex justify-between">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//             >
//               Crear
//             </button>
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
//             >
//               Cerrar
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ModalCrearElemento;
