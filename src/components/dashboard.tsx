import React from "react";
import { Container, AppBar, Toolbar, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Container maxWidth={false} className="w-full pb-2 ">
      <AppBar position="static" className="w-full">
        <Toolbar className="flex items-center justify-center ">
          <Typography variant="h4"> Gestion de Balance de Carga</Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Dashboard;
