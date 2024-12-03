"use client";
import React, { useEffect, useState } from "react";
import { CourseInterface } from "@/types/course";
import {
  createCourse,
  deleteCourse,
  fetchCursos,
  updateCourse,
} from "@/services/curseService";

import CursoCard from "@/components/CourseCard";

import IsEmpty from "@/components/EmptyCard";
import ModalCrearCurso from "@/components/CourseModal";

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
      const nuevoCurso = await createCourse(curso);

      setCursos((prev) => [...prev, nuevoCurso]);
    } catch (error) {
      console.error("Error creando curso:", error);
    }
  };

  const handleUpdate = async (cursoId: number, cursoData: { name_course: string }) => {
    try {
      await updateCourse(cursoId, cursoData);
      setUpdateTrigger((prev) => prev + 1); // Actualiza la lista de cursos
    } catch (error) {
      console.error("Error actualizando curso:", error);
    }
    setIsModalOpen(false); // Cierra el modal después de la actualización
  };

  const handleDelete = async (cursoId: number) => {
    try {
      await deleteCourse(cursoId);
      console.log("Curso eliminado con éxito");

      setUpdateTrigger((prev) => prev + 1);
    } catch (error) {
      console.error("Error al eliminar el curso:", error);
    }
  };

  return (
    <div className="pl-6">
      <h1 className="text-2xl font-semibold mb-2">Gestión de Cursos</h1>
      <ModalCrearCurso
        title="Curso"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
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
