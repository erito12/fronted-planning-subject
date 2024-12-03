import axios from "axios";
import { CourseInterface } from "@/types/course";

const API_URL = "http://localhost:3001/courses"; // Actualiza la URL

export const fetchCursos = async (): Promise<CourseInterface[]> => {
  const response = await axios.get(API_URL);
  console.log(response);
  return response.data;
};

export const createCourse = async (courseData: {
  name_course: string;
}): Promise<CourseInterface> => {
  try {
    const response = await axios.post<CourseInterface>(API_URL, courseData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error al crear el curso:", error);
    throw new Error("No se pudo crear el curso.");
  }
};

export const updateCourse = async (
  cursoId: number,
  updatedData: { name_course: string }
) => {
  try {
    const response = await axios.put<CourseInterface>(
      `${API_URL}/${cursoId}`,
      updatedData
    );
    console.log("Curso actualizado:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el curso:", error);
    throw new Error("No se pudo actualizar el curso.");
  }
};

export const deleteCourse = async (cursoId: number) => {
  try {
    console.log("Eliminar curso con ID:", cursoId);

    await axios.delete(`${API_URL}/${cursoId}`);

    console.log("Curso eliminado con éxito");
  } catch (error) {
    console.error("Error al eliminar el curso:", error);
  }
};
