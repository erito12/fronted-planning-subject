import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <div>
      <AppBar position="static" className="w-full">
        <Toolbar className="flex items-center justify-center ">
          <Typography variant="h4"> Gestión de Balance de Carga</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Dashboard;
