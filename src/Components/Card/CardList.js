import React from 'react';
import Card from './Card';
import style from './CardList.module.css';
import {Link} from "react-router-dom";


const CardList = ({moviesProp}) => {
  return (
    <div className={style.container}>
      <div className={style.list}>
        {moviesProp.map(({id, title, image, description, genre}) => (
          <Link to="/:id"
                key={id}>
            <div className={style.item}>
              <Card title={title}
                    image={image}
                    description={description}
                    genre={genre}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default CardList;
