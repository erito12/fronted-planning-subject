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
          <div className="flex items-center justify-center">
            {" "}
            <Typography variant="h3" component="div" justifyItems={"center"}>
              <AddIcon style={{ width: "30px", height: "40px" }} />
            </Typography>
          </div>

          <Button
            onClick={openModal}
            variant="contained"
            color="primary"
            className="mt-4"
          >
            Crear {name}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default IsEmpty;
