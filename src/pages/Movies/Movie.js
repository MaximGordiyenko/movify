import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useStyle } from "./Movies.style";
import style from './Movie.module.css';

export const Movie = () => {
  const classes = useStyle();
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  
  const { gameOfThronesData } = useSelector(state => state?.gameOfThrones);
  
  useEffect(() => {
    const getMovie = gameOfThronesData?.find(movie => movie?.id === id);
    setMovie(getMovie);
  }, [id, gameOfThronesData]);
  
  console.log(movie);
  return (
    <section className={style.wrap}>
      <Link to="/movies">&#8678; Movies</Link>
      {
        movie &&
        <section className={classes.container}>
          <section>
            <h1 className={style.neonText}>{movie.l}</h1>
            <span>Type: {movie?.q}</span> <span>with</span> <span>Rank: {movie.rank}</span>
            {movie.v && movie.i ?
              <section>
                <img src={movie.v[0].i.imageUrl} width={600} alt={movie.l}/>
              </section>
              :
              <section>
                <img src={movie?.i?.imageUrl} width={600} alt={movie.l}/>
              </section>
            }
          </section>
        </section>
      }
    </section>
  );
};