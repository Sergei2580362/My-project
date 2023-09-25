import React from "react";
import { Wrapper, LeftButtonContainer, RightButtonContainer } from './index.style';
import { Button } from '../button';
import { logoutFromApp } from '../../redux/authSlice';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from '../../redux/authSelectors';
import { LoginName } from "./index.style";
import { useNavigate, Navigate } from "react-router-dom";



export const MainMenu = () => {
    const dispatch = useDispatch();
    const userData = useSelector(getUser);
    const logoutHandler = () => {
        console.log("Logout!");
        dispatch(logoutFromApp());
    }

    const navigate = useNavigate();

    const handleClickSettings = () => {
      navigate('/settings');
    };  
    
    return (
        <Wrapper>
            <LeftButtonContainer>
                <Button
                    size='xl'
                    view='primary'
                    onClick={handleClickSettings}
                    style={{ margin: "10px" }}
                >
                    Settings
                </Button>
            </LeftButtonContainer>
            <LoginName>USER: {userData?.email}</LoginName>
            <RightButtonContainer>
                <Button
                    size='xl'
                    view='primary'
                    onClick={logoutHandler}
                    style={{ margin: "10px" }}
                >
                    Logout
                </Button>
            </RightButtonContainer>
        </Wrapper>
    );
};
