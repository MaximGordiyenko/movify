import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { ActionAreaCard } from "../../components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getGameOfThrones } from "../../redux/actions/movies.action";
import { useStyle } from './Movies.style';

export const Movies = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getGameOfThrones());
  }, [dispatch]);
  
  const { gameOfThronesData, loading } = useSelector(state => state?.setGameOfThrones);
  const { error } = useSelector(state => state?.error);
  
  return (
    <>
      {error ?
        <>{error}</> :
        <div className={classes.container}>
          {loading && gameOfThronesData.length === 0 && <div className={classes.loading}>Loading...</div>}
          {gameOfThronesData?.map(movie =>
            <div key={movie?.id}>
              <Link to={`/movies/${movie.id}`}>
                <ActionAreaCard movie={movie} key={movie?.id}/>
              </Link>
            </div>
          )}
        </div>
      }
    </>
  );
};