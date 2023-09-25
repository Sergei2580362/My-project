import styled from 'styled-components';


export const Wrapper = styled.div`
  & {
    min-height: fit-content;
    background-color: #FFEBD7;
    border-radius: 100px;
    margin: 100px;
    text-align: center;
    flex: 1;
    display: flex;
    flex-direction: column;
    /* padding: 50px; */
    overflow: hidden; /* Добавьте эту строку */
  }
`;

export const Top = styled.div`
    & {
        flex: 1;
        justify-content: center; /* Выравнивание по горизонтали по центру */
        align-items: center; /* Выравнивание по вертикали по центру */
        margin: 100px 50px 0px 50px;
    }
        
        & > input { 
            margin: 20px
    }
`;

export const Bottom = styled.div`
    & {
        flex: 1;
        margin: 50px;
        justify-content: center; /* Выравнивание по горизонтали по центру */
        align-items: center; /* Выравнивание по вертикали по центру */
    }
        
        & > button { 
            margin: 20px
    }
`;