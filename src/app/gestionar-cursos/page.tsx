"use client";
import React, { useEffect, useState } from "react";
import { Course } from "@/types/course";
import { fetchCursos } from "@/services/curseService";
import NoCursos from "@/components/EmptyCard";
import CursoCard from "@/components/GenericCard";

const GestionarCursos: React.FC = () => {
  const [cursos, setCursos] = useState<Course[]>([]);
  const [noCursos, setNoCursos] = useState(true);

  useEffect(() => {
    const loadCursos = async () => {
      try {
        const data = await fetchCursos();
        setCursos(data);
        setNoCursos(data.length === 0);
      } catch (error) {
        console.error("Error fetching cursos:", error);
      }
    };

    loadCursos();
  }, []);

  const handleUpdate = (cursoId: number) => {
    console.log("Actualizar curso con ID:", cursoId);
    // Aquí puedes agregar la lógica para actualizar el curso
  };

  const handleDelete = (cursoId: number) => {
    console.log("Eliminar curso con ID:", cursoId);
    // Aquí puedes agregar la lógica para eliminar el curso
  };
  const crearCurso = () => {
    alert("Función para crear curso aún no implementada.");
  };

  return (
    <div className="pl-6">
      <h1 className="text-2xl font-semibold mb-2">Gestión de Cursos</h1>
      {noCursos ? (
        <NoCursos onCreateCurso={crearCurso} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cursos.map((curso) => (
            <CursoCard
              key={curso.id_course}
              curso={curso}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default GestionarCursos;
