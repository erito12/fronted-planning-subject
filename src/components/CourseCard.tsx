import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { CourseInterface } from "@/types/course";
import Link from "next/link"; // Importa Link de Next.js

interface CursoCardProps {
  curso: CourseInterface;
  onUpdate: (cursoId: number) => void;
  onDelete: (cursoId: number) => void;
}

const CursoCard: React.FC<CursoCardProps> = ({ curso, onUpdate, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUpdate = () => {
    onUpdate(curso.id_course);
    handleClose();
  };

  const handleDelete = () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este curso?")) {
      onDelete(curso.id_course);
    }
    handleClose();
  };

  return (
    <div className="flex p-2">
      <Card className="w-60 h-32 relative cursor-pointer">
        <h1 className="flex items-center justify-center pt-2 font-bold">
          Curso
        </h1>
        <CardContent className="flex justify-between">
          <Typography variant="h6" component="div">
            {curso.name_course}
          </Typography>
          <IconButton onClick={handleClick} className="absolute top-2 left-2">
            {/* <MoreVertIcon /> */}...
          </IconButton>
        </CardContent>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleUpdate}>Actualizar</MenuItem>
          <MenuItem onClick={handleDelete}>Eliminar</MenuItem>
          <MenuItem onClick={() => handleClose()}>
            <Link href={`/gestionar-cursos/${curso.id_course}`} passHref>
              Abrir
            </Link>
          </MenuItem>
        </Menu>
      </Card>
    </div>
  );
};

export default CursoCard;
