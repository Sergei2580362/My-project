import React, { useContext } from "react";
import {Button as StyledButton} from './index.style';


export const Button = ({children, ...props}) => {
    return <StyledButton {...props}>{children}</StyledButton>
};