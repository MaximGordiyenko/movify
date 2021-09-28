import { Link } from "react-router-dom";
import { useState } from "react";
// import data from './data.json';

export const Movie = () => {
  const [movie] = useState('Default Title')
  // const {id} = useParams();
  //
  // useEffect(() => {
  // const getMovie = data.find(movie => movie.id === parseInt(id));
  // setMovie(getMovie.title);
  // }, [id]);
  
  return (
    <>
      <h2>{movie}</h2>
      <Link to='/movies'>Back to list of movies</Link>
    </>
  );
};
