import React from 'react';
import {NavLink} from "react-router-dom";
import {ListWrapper} from "./SignStyle";

const SignedInLinks = () => {
  return (
    <ListWrapper>
      <li><NavLink to='/create'>New Project</NavLink></li>
      <li><NavLink to='/'>Log Out</NavLink></li>
      <li><NavLink to='/dashboard'>NN</NavLink></li>
    </ListWrapper>
  );
};

export default SignedInLinks;
