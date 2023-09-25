import styled, {css} from 'styled-components';


const basicSideCss = css`
        height: 100%;
`;


export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(300px, 350px) 1fr;
    height: 100%;
`;

export const LeftSide = styled.div`
    & {
        ${basicSideCss}
        background-color: #FFDEBF;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        text-align: center;
    }
`;

export const RightSide = styled.div`
    & {
        ${basicSideCss}
        background-color: #FFEBD7;
        text-align: center;
        flex: 2;
        display: flex;
        flex-direction: column;
    }
`;

export const RightSideTop = styled.div`
    & {
        ${basicSideCss}
        flex: 1;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr; // Два столбца
        grid-gap: 10px; // Расстояние между столбцами
        padding: 130px 0 0 0;
        justify-content: center; /* Выравнивание по горизонтали по центру */
        align-items: center; /* Выравнивание по вертикали по центру */
    }
        
        /* & > div { 
            margin: 20px
    } */
`;

export const RightSideBottom = styled.div`
    & {
        ${basicSideCss}
        flex: 1;
        justify-content: center; /* Выравнивание по горизонтали по центру */
        align-items: center; /* Выравнивание по вертикали по центру */
    }
        
        /* & > div { 
            margin: 20px
    } */
`;
