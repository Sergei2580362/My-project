import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StylishLink = styled(Link)`
    color: black;
    text-decoration: none;
    font-size: 26px;
`;

export const Wrapper = styled.div`
    background-color: #C2A68C;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    margin: 100px;
`;

export const TextWrapper = styled.div`
    text-align: center;
`;

export const Text = styled.p`
    font-size: 40px;
    font-weight: 900;
    color: #AA7038;
    margin: 0 auto;
    text-align: center;
`;