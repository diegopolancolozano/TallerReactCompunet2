import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import Navbar from '../components/navBar';
import { useEffect, useState } from 'react';

const MainPage = () => {

  return (
    <>
      <Navbar />
      <Container>
        <Box sx={{ textAlign: 'center', marginTop: 5 }}>
          <Typography variant="h3" gutterBottom>
            Bienvenidos a RentingGamesAndPc's (MainPage)
          </Typography>
          <Typography variant="h5" gutterBottom>
            Es un empresa dedicada al alquiler de juegos y PC's. Mediante la página web presente podrá ver la lista de juegos disponibles y, adicionalmente, realizar solicitudes.
          </Typography>
          <Button 
            href="/games" 
            variant="contained" 
            color="primary" 
          >
            Ver Juegos
          </Button>
          <Button  
            href="/requests" 
            variant="outlined" 
            color="secondary"
          >
            Solicitar Juego
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default MainPage;