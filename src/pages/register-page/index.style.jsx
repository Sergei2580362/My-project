import styled from 'styled-components';


export const Wrapper = styled.div`
    background-color: #C2A68C;
    height: 100%;
`;

export const RegisterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 40px;
    border-radius: 40px;
    background-color: #FFEBD7;
    box-shadow: 5px  5px 5px rgba(0,0,0,.5);

    & > * {
        margin: 12px 0;
    }

    & > input {
        border: 1px solid gray;
    }

    & > h1 {
        text-align: center;
    }

    & > a {
        text-decoration: none;
    }

`;

