import React, { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import Navbar from '../components/navBar';
import Game from '../components/game';

const GamesPage = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://games-api-symi.onrender.com/games')
      .then(response => response.json())
      .then(data => {
        setGames(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener los juegos:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Box sx={{ textAlign: 'center', marginTop: 5 }}>
          <Typography variant="h3" gutterBottom>
            Juegos Disponibles
          </Typography>
          {loading ? (
            <Typography>Cargando juegos...</Typography>
          ) : (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3 }}>
              {games.map(game => (
                <Game key={game.id} game={game} />
              ))}
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
}

export default GamesPage;