import styled from 'styled-components';



export const ModalWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
`;

export const ModalContent = styled.div`
    position: absolute;
    width: max-content;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 10px 10px 10px rgba(0,0,0,0.5);
    border-radius: 12px;
    padding: 20px;
    z-index: 11;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 10px; /* Задайте желаемое расстояние между кнопками */
`;

export const ModalText = styled.div`
    margin-bottom: 10px; /* Задайте желаемое расстояние между текстовыми элементами и кнопками */
    text-align: center; /* Выравнивание текста по центру */
`;

export const ModalBackdrop = styled.div`
    background-color: rgba(0,0,0,0.7);
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
`;

