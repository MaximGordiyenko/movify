import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Movie = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const gameOfThronesData = useSelector(state => state.gameOfThronesReducer.gameOfThronesData);
  
  useEffect(() => {
    const getMovie = gameOfThronesData.find(movie => movie.id === id);
    setMovie(getMovie);
  }, [id]);
  console.log(movie);
  return (
    <>
      {movie &&
      <>
        <Link to="/movies">Movies</Link>
        <h1>{movie.l}</h1>
        <p>Type: {movie.q}</p>
        {movie.v &&
        <>
          <img src={movie.v[0].i.imageUrl} width={600} alt=""/>
          <p>Rank: {movie.rank}</p>
        </>
        }
      </>
      }
    </>
  );
};
