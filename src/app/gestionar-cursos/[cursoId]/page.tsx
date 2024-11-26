"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import IsEmpty from "@/components/EmptyCard";
import ModalCreateYear from "@/components/Modal-year";
import { createYear } from "@/services/yearService";
import { yearInterface } from "@/types/year";

const GestionarCursos = () => {
  const [year, setYear] = useState<yearInterface[]>([]);
  const { cursoId } = useParams(); // Obtiene el ID del curso desde la URL
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreate = async (yearData: { name_year: string }) => {
    try {
      // Agrega el cursoId a yearData
      const nuevoYear = await createYear({ 
        name_year: yearData.name_year, 
        courseId: Number(cursoId) // Asegúrate de convertir a número si es necesario
      });

      setYear((prev) => [...prev, nuevoYear]);
    } catch (error) {
      console.error("Error creando año:", error);
    }
  };

  return (
    <div className="pl-6">
      <h1 className="text-2xl font-semibold mb-2">
        Gestión de Años para el Curso ID: {cursoId}
      </h1>
      <ModalCreateYear
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreate}
      />
      <div className="flex items-center">
        <IsEmpty openModal={() => setIsModalOpen(true)} name="Año" />
      </div>
    </div>
  );
};

export default GestionarCursos;
