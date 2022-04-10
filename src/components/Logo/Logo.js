import React from 'react';
import style from './Logo.module.css';

export const Logo = ({ logoImg }) => (
  <img className={style.image}
       src={logoImg}
       alt="logo"/>
);