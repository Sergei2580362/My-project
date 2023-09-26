import styled, {css} from 'styled-components';


export const CustomSelect = styled.select`
    width: 215px;
    background-color: #FFCFA2;
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;

    &:focus {
        box-shadow: inset 2px 2px 3px rgba(0,0,0,0.2);
    }
`;


export const CustomOption = styled.option`
  padding: 10px;
  font-size: 14px;
  background-color: #fff;
  color: #333;
`;