import React from 'react';
import {NavLink} from "react-router-dom";
import {ListWrapper} from "./SignStyle";

const SignedOutLinks = () => {
  return (
    <ListWrapper>
      <li><NavLink to='/signup'>Sing Up</NavLink></li>
      <li><NavLink to='/signin'>Login</NavLink></li>
    </ListWrapper>
  );
};

export default SignedOutLinks;
