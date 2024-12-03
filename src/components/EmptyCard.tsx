import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface IsEmptyProps {
  openModal: () => void;
  name: string;
}

const IsEmpty: React.FC<IsEmptyProps> = ({ openModal, name }) => {
  return (
    <div className="flex flex-col items-center justify-center p-2">
      <Card className="w-60 h-26">
        <CardContent className="flex flex-col">
          <div className="flex items-center justify-center font-bold">
            {" "}
            <Typography variant="h6" component="div" justifyItems={"center"}>
              Crear {name}
            </Typography>
          </div>

          <Button
            onClick={openModal}
            variant="contained"
            color="primary"
            className="mt-4"
          >
            <AddIcon style={{ width: "40px", height: "40px" }} />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default IsEmpty;
