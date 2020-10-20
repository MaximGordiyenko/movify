import React from 'react';
import style from './Logo.module.css'

const Logo = ({logoUrl, logoImg}) => (
  <a href={logoUrl}
     className={style.link}>
    <img className={style.image}
         src={logoImg}
         alt="logo"/>
  </a>
);
export default Logo;
