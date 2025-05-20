import { Typography, Box, Card, CardMedia, CardContent, Stack, Chip } from '@mui/material';

export default function Game({ game }) {
  return (
    <Card sx={{ width: 300 }}>
      {game.image && (
        <CardMedia
          component="img"
          height="180"
          image={game.image}
          alt={game.title}
        />
      )}
      <CardContent>
        <Typography variant="h5">{game.title}</Typography>
        <Stack direction="row" spacing={1} sx={{ my: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
          {game.genre.map((g, idx) => (
            <Chip key={idx} label={g} size="small" />
          ))}
        </Stack>
        <Typography variant="body2" color="text.secondary">
          PCs disponibles: {game.pcsAvailable.join(', ')}
        </Typography>
      </CardContent>
    </Card>
  );
}