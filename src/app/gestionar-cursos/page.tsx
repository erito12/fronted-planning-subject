"use client";
import React, { useEffect, useState } from "react";
import { CourseInterface } from "@/types/course";
import {
  createCourse,
  deleteCourse,
  fetchCursos,
} from "@/services/curseService";

import CursoCard from "@/components/CourseCard";
import ModalCrearCurso from "@/components/CustomModal";
import IsEmpty from "@/components/EmptyCard";

const GestionarCursos: React.FC = () => {
  const [cursos, setCursos] = useState<CourseInterface[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateTrigger, setUpdateTrigger] = useState(0);

  useEffect(() => {
    const loadCursos = async () => {
      try {
        const data = await fetchCursos();
        setCursos(data);
      } catch (error) {
        console.error("Error fetching cursos:", error);
      }
    };

    loadCursos();
  }, [updateTrigger]);

  const handleCreate = async (curso: { name_course: string }) => {
    try {
      // Llama a la función createCourse y espera la respuesta
      const nuevoCurso = await createCourse(curso);

      setCursos((prev) => [...prev, nuevoCurso]);
    } catch (error) {
      console.error("Error creando curso:", error);
    }
  };

  const handleUpdate = (cursoId: number) => {
    console.log("Actualizar curso con ID:", cursoId);

    setUpdateTrigger((prev) => prev + 1);
  };

  const handleDelete = async (cursoId: number) => {
    try {
      await deleteCourse(cursoId); // Llama a tu función de eliminación
      console.log("Curso eliminado con éxito");
      // Actualiza el estado local si es necesario
      setUpdateTrigger((prev) => prev + 1);
    } catch (error) {
      console.error("Error al eliminar el curso:", error);
    }
  };

  return (
    <div className="pl-6">
      <h1 className="text-2xl font-semibold mb-2">Gestión de Cursos</h1>
      <ModalCrearCurso
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreate}
      />
      <div className=" flex items-center  ">
        <IsEmpty openModal={() => setIsModalOpen(true)} name="curso" />

        {cursos.map((curso) => (
          <CursoCard
            key={curso.id_course}
            curso={curso}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default GestionarCursos;
