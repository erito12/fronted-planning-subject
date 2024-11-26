import axios from "axios";
import { CourseInterface } from "@/types/course";

const API_URL = "http://localhost:3001/courses"; // Actualiza la URL

export const fetchCursos = async (): Promise<CourseInterface[]> => {
  const response = await axios.get(API_URL);
  console.log(response);
  return response.data;
};

export const createCourse = async (courseData: {
  name_course: string /* otras propiedades */;
}): Promise<CourseInterface> => {
  try {
    const response = await axios.post<CourseInterface>(API_URL, courseData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error al crear el curso:", error);
    throw new Error("No se pudo crear el curso."); // Lanza un error para manejarlo en el componente
  }
};

export const updateCourse = async (
  cursoId: number,
  updatedData: { name_course: string /* otras propiedades */ }
) => {
  try {
    console.log("Actualizar curso con ID:", cursoId);

    // Realiza la solicitud PUT para actualizar el curso
    const response = await axios.put<CourseInterface>(
      `${API_URL}/${cursoId}`,
      updatedData
    );

    console.log("Curso actualizado:", response.data);

    // Aquí puedes actualizar el estado local si es necesario
    // setCursos((prev) => prev.map(curso => curso.id_course === cursoId ? response.data : curso));
  } catch (error) {
    console.error("Error al actualizar el curso:", error);
    // Manejo de errores
  }
};

export const deleteCourse = async (cursoId: number) => {
  try {
    console.log("Eliminar curso con ID:", cursoId);

    // Realiza la solicitud DELETE para eliminar el curso
    await axios.delete(`${API_URL}/${cursoId}`);

    console.log("Curso eliminado con éxito");

    // Aquí puedes actualizar el estado local
    // setCursos((prev) => prev.filter(curso => curso.id_course !== cursoId));
  } catch (error) {
    console.error("Error al eliminar el curso:", error);
    // Manejo de errores
  }
};
