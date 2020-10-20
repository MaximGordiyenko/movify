import React, {Component} from 'react';
import style from './Navbar.module.css';
import Logo from "../Logo/Logo";
import {NavLink} from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

export class Navbar extends Component {
  render() {
    const pages = ['Blog', 'Dashboard'];
    const navLinks = pages.map(page => {
      return (
        <NavLink className={style.link}
                 to={page} //"{page}" - this is each element of array's pages and "Link to=" it's link to the component
                 key={page}
                 href={'/' + page}>
          {page}
        </NavLink>
      );
    });
    
    return (
      <nav className={style.navbar}>
        <Logo logoUrl="/"
              logoImg="https://www.freepnglogos.com/uploads/f-logo-orange-png-19.png"/>
        {
          navLinks
        }
          <SignedInLinks/>
          <SignedOutLinks/>
      </nav>
    );
  }
}
