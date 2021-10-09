import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { ActionAreaCard } from "./Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { gameOfThrones } from "../redux/actions/movies/movies.action";

export const Movies = () => {
  const dispatch = useDispatch();
  const gameOfThronesData = useSelector(state => state.gameOfThronesReducer.gameOfThronesData);
  
  useEffect(() => {
    dispatch(gameOfThrones());
  }, [dispatch]);
  
  return (
    <div>
      {gameOfThronesData.map(movie =>
        <div key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <ActionAreaCard movie={movie}/>
          </Link>
        </div>
      )}
    
    </div>
  );
};
