import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { ActionAreaCard } from "./Card/Card";
// import { useStyles } from 'Movies.styles';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  // const classes = useStyles();
  
  useEffect(() => {
    fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "b4aeee3b75msh751306c9d9aaf5cp181842jsne875bf5aecea"
      }
    })
      .then(res => res.json())
      .then(res => setMovies(res.d))
      .catch(err => {
        console.error(err);
      });
  }, []);
  console.log(movies.map(movie => movie));
  return (
    <div>
      {movies.map(movie =>
        <div key={movie.id}>
          <Link to={`/movie/${movie.l.replace(/\s+/g, '-')}`}>
            <ActionAreaCard movie={movie}/>
          </Link>
        </div>
      )}
    
    </div>
  );
};
