// import React from "react";
import styled from 'styled-components';
import {colors} from "../variables";

const ButtonStyled = styled.button.attrs({
  className: 'button'
})`
  background: ${props => props.primary ? colors.primaryBackground : colors.primaryColor};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid ${props => props.primary ? colors.primaryBackground : colors.primaryColor};
  border-radius: 3px;
    &:hover {
      background: ${props => props.primary ? colors.hoverBg : "white"};
      color: ${props => props.primary ? "white" : "palevioletred"};
    }
`;

export default ButtonStyled;
