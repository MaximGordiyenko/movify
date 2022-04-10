import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

export const ActionAreaCard = ({movie}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={movie.i.imageUrl}
          alt={movie.l}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.l}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
