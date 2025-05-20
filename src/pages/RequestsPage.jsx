import React from 'react';
import { Container, Typography, Box, Button, Stack, TextField } from '@mui/material';
import Navbar from '../components/navBar';
import { useEffect, useState } from 'react';

const RequestsPage = () => {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [gameName, setGameName] = useState('');
  const [comments, setComments] = useState('');

  return (
    <>
    <Navbar />
    <Container>
      <Stack sx={{ textAlign: 'center', marginTop: 5, gap: 2 }}>
        <Typography variant="h3" gutterBottom>
          Formulario para Solicitar Juegos
        </Typography>
        <Box>
        <Typography variant="h5">Formulario</Typography>
        </Box>
        <Box>
        <Typography>Nombre de usuario</Typography>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" value={userName} onChange={(e) => setUserName(e.target.value)}/>
        </Box>
        <Box>
        <Typography>Correo Electrónico</Typography>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Box>
        <Box>
        <Typography>Nombre del juego a solicitar</Typography>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" value={gameName} onChange={(e) => setGameName(e.target.value)}/>
        </Box>
        <Box>
        <Typography >Comentarios</Typography>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" value={comments} onChange={(e) => setComments(e.target.value)}   sx={{ width: 400, height: 100 }}/>
        </Box>
        <Box>
          <Button variant="contained" onClick={
            () => {
              alert(
                "Datos:\n" +
                "Nombre: " + userName + "\n" +
                "Correo: " + email + "\n" +
                "Juego: " + gameName + "\n" +
                "Comentarios: " + comments
              );
            }
          }>Contained</Button>
        </Box>
        
      </Stack>
    </Container>
    </>
  );
}

export default RequestsPage;
