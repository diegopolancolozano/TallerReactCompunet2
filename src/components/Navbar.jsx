import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          RentingGamesAndPc's
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Inicio
          </Button>
          <Button color="inherit" component={Link} to="/games">
            Juegos
          </Button>
          <Button color="inherit" component={Link} to="/requests">
            Solicitudes
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;