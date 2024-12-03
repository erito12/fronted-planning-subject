import { yearInterface } from "@/types/year";
import axios from "axios";

const API_URL = "http://localhost:3001/years";

// export const fetchCursos = async (): Promise<yearInterface[]> => {
//   const response = await axios.get(API_URL);
//   console.log(response);
//   return response.data;
// };

export const createYear = async (yearData: {
  name_year: string;
  courseId: number; // Asegúrate de que courseId esté incluido
}): Promise<yearInterface> => {
  try {
    const response = await axios.post<yearInterface>(API_URL, yearData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error al crear el año:", error);
    throw new Error("No se pudo crear el año."); // Lanza un error para manejarlo en el componente
  }
};
export const fetchYear = async (): Promise<yearInterface[]> => {
  const response = await axios.get(API_URL);
  console.log(response);
  return response.data;
};
