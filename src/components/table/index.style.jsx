import styled from 'styled-components';

export const TableContainer = styled.div`
  display: flex;
  justify-content: center; // Горизонтальное выравнивание по центру
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 80%;
  border: 1px solid #000;
  margin: 50px;
  justify-content: center; /* Выравнивание по горизонтали по центру */
  align-items: center; /* Выравнивание по вертикали по центру */
`;

export const StyledTh = styled.th`
  border: 1px solid #000;
  padding: 8px;
  background-color: #FFCFA2;
  justify-content: center; /* Выравнивание по горизонтали по центру */
  align-items: center; /* Выравнивание по вертикали по центру */
`;

export const StyledTd = styled.td`
  border: 1px solid #000;
  padding: 8px;
  background-color: white;
  justify-content: center; /* Выравнивание по горизонтали по центру */
  align-items: center; /* Выравнивание по вертикали по центру */
`;