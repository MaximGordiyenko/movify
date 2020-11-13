import React, { Component } from 'react';
import { Navigation } from './NavbarStyle';
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { ListWrapper } from "./SignStyle";

export class Navbar extends Component {
  render() {
    const pages = ['Blog', 'Dashboard'];
    const navLinks = pages.map(page => {
      return (
        <li key={page}>
          <NavLink
            to={page} //"{page}" - this is each element of array's pages and "Link to=" it's link to the component
            href={'/' + page}>
            {page}
          </NavLink>
        </li>
      );
    });
    
    return (
      <Navigation>
        <Logo logoUrl="/"
              logoImg="https://www.freepnglogos.com/uploads/f-logo-orange-png-19.png"/>
        <ListWrapper>{navLinks}</ListWrapper>
        <SignedInLinks/>
        <SignedOutLinks/>
      </Navigation>
    );
  }
}
