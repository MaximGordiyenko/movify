import React from 'react';
import {NavLink} from "react-router-dom";
import {ListWrapper} from "./SignStyle";

const SignedInLinks = () => {
  return (
    <ListWrapper>
      <li><NavLink to='/'>Log Out</NavLink></li>
    </ListWrapper>
  );
};

export default SignedInLinks;
