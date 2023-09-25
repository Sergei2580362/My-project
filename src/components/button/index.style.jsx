import styled, {css} from 'styled-components';
import { SIZE } from '../shared/styles';

const VIEW = {
    primary: {
        common: css`
            background-color: #C2A68C;
            color: #2d2d2d;
            border: 0.5px solid #2d2d2d;
        `,
        hover: css`
            background-color: #FFCFA2;
        `
    },
    secondary: {
        common: css`
            background-color: #e9e9e9;
            color: #2d2d2d;
            border: 0.5px solid gray;
        `,
        hover: css`
            background-color: #fff;
        `
    }
};

export const Button = styled.button`

        text-transform: capitalize;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        ${({size = 'l'}) => {
            return SIZE[size]
        }}
        ${({view = 'primary'}) => VIEW[view].common}
    

    &:first-child {
        margin: 0 10px 0 0;
    }

    &:active {
        box-shadow: inset 2px 2px 3px rgba(0,0,0,0.2);
    }

    &:hover {
        ${({view = 'primary'}) => VIEW[view].hover}
    }
`;