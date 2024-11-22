// import React, { useEffect, useState } from "react";
// import { Button, Card, CardContent, Typography } from "@mui/material";
// import { Course } from "@/app/types/course";

const GestionarCursos: React.FC = () => {
  // const [cursos, setCursos] = useState<Course[]>([]);
  // const [noCursos, setNoCursos] = useState(true);

  // useEffect(() => {
  //   // Lógica para obtener cursos desde el backend
  //   const fetchCursos = async () => {
  //     const response = await fetch("/api/cursos"); // Asegúrate de tener esta API
  //     const data = await response.json();
  //     setCursos(data);
  //     setNoCursos(data.length === 0);
  //   };

  //   fetchCursos();
  // }, []);

  // const crearCurso = () => {
  //   // Lógica para crear un nuevo curso
  //   alert("Función para crear curso aún no implementada.");
  // };

  // const mostrarOpciones = (cursoId: string) => {
  //   // Lógica para mostrar opciones de eliminar o actualizar
  //   alert("Opciones para el curso: " + cursoId);
  // };

  return (
    <>
      <div>
        <h1>GEstion de Cursos</h1>
      </div>
    </>
    // <div className="p-4">
    //   <h1 className="text-2xl font-bold mb-4">Gestión de Cursos</h1>
    //   {noCursos ? (
    //     <div className="flex flex-col items-center justify-center h-64">
    //       <Card className="w-80">
    //         <CardContent>
    //           <Typography variant="h5" component="div">
    //             No hay cursos disponibles
    //           </Typography>
    //           <Button
    //             onClick={crearCurso}
    //             variant="contained"
    //             color="primary"
    //             className="mt-4"
    //           >
    //             Crear Curso
    //           </Button>
    //         </CardContent>
    //       </Card>
    //     </div>
    //   ) : (
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    //       {cursos.map((curso) => (
    //         <Card key={curso.id_course} className="w-full">
    //           <CardContent>
    //             <Typography variant="h5" component="div">
    //               {curso.name_course}
    //             </Typography>

    //             <Button
    //               onClick={() => mostrarOpciones(curso.id)}
    //               className="absolute top-2 right-2"
    //             >
    //               ⋮
    //             </Button>
    //           </CardContent>
    //         </Card>
    //       ))}
    //     </div>
    //   )}
    // </div>
  );
};

export default GestionarCursos;
