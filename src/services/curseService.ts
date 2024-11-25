import axios from "axios";
import { Course } from "@/types/course";

const API_URL = "http://localhost:3001/courses"; // Actualiza la URL

export const fetchCursos = async (): Promise<Course[]> => {
  const response = await axios.get(API_URL);
  console.log(response);
  return response.data;
};
