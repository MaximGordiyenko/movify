import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { ActionAreaCard } from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { gameOfThrones } from "../../redux/actions/movies.action";
import { useStyle } from './Movies.style';

export const Movies = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const { gameOfThronesData } = useSelector(state => state?.gameOfThrones);
  const { loading } = useSelector(state => state?.gameOfThrones);
  
  useEffect(() => {
    dispatch(gameOfThrones());
  }, [dispatch]);
  
  return (
    <>
      {loading && <div className={classes.loading}>Loading...</div>}
      <div className={classes.container}>
        {gameOfThronesData?.map(movie =>
          <div key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <ActionAreaCard movie={movie}/>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};