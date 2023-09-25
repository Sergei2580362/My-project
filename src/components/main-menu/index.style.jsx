import styled from 'styled-components';



export const Wrapper = styled.div`
    display: flex;
    z-index: 100;

    div:first-child {
        color: #fff;
    }

    & {
        padding: 10px;
        margin: 20px;
        position: fixed;
        left: 0;
        right: 0;
        background-color: #AA7038;
        border-radius: 30px;
    }
`;

export const LoginName = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 35px;
    border-radius: 40px;
    color: white;
    background-color: #3b3b3b;
    box-shadow: 5px  5px 5px rgba(0,0,0,.5);
    font-size: 24px;
    font-weight: bold;
`;

export const LeftButtonContainer = styled.div`
    display: flex;
    align-items: center; /* Выравнивание по вертикали по центру */
    margin-right: auto; /* Помещаем кнопку "Logout" в левую часть */
`;

export const RightButtonContainer = styled.div`
    display: flex;
    align-items: center; /* Выравнивание по вертикали по центру */
    margin-left: auto; /* Помещаем кнопку "Logout" в левую часть */
`;