import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
// import MoreVertIcon from "@mui/icons-material/MoreVert"; // Icono para el botón
import { Course } from "@/types/course";

interface CursoCardProps {
  curso: Course;
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
    onDelete(curso.id_course);
    handleClose();
  };

  return (
    <Card className="w-60">
      <h1 className="flex items-center justify-center pt-2 font-bold">Curso</h1>
      <CardContent className="flex justify-between">
        <Typography variant="h6" component="div">
          {curso.name_course}
        </Typography>
        <IconButton
          onClick={handleClick}
          className="absolute top-2 left-2" // Cambiado a izquierda
        >
          {/* <MoreVertIcon /> */}...
        </IconButton>
      </CardContent>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleUpdate}>Actualizar</MenuItem>
        <MenuItem onClick={handleDelete}>Eliminar</MenuItem>
      </Menu>
    </Card>
  );
};

export default CursoCard;
