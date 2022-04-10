import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { ActionAreaCard } from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { gameOfThrones } from "../../redux/actions/movies.action";
import { useStyle } from './Movies.style';

export const Movies = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const GOTData = useSelector(state => state.gameOfThrones.gameOfThronesData);
  const GOTDataLoading = useSelector(state => state.gameOfThrones.loading);
  
  useEffect(() => {
    dispatch(gameOfThrones());
  }, [dispatch]);
  
  return (
    <>
      {GOTDataLoading && <div className={classes.loading}>Loading...</div>}
      <div className={classes.container}>
        {GOTData?.map(movie =>
          <div key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <ActionAreaCard movie={movie}/>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};