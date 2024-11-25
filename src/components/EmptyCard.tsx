import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";

interface NoCursosProps {
  onCreateCurso: () => void;
}

const NoCursos: React.FC<NoCursosProps> = ({ onCreateCurso }) => {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <Card className="w-60">
        <CardContent className="flex flex-col">
          <div className="flex items-center justify-center">
            {" "}
            <Typography variant="h2" component="div" justifyItems={"center"}>
              +
            </Typography>
          </div>

          <Button
            onClick={onCreateCurso}
            variant="contained"
            color="primary"
            className="mt-4"
          >
            Crear Curso
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoCursos;
