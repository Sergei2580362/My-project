import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TableContainer, StyledTable, StyledTh, StyledTd } from './index.style';
import { Button } from '../button';
import { Modal, ModalContent, ModalText, ButtonContainer } from '../modal';
import { Navigate, useNavigate } from 'react-router-dom';
import { initialData } from '../../mock';
import { getExpenses, deleteExpense, setEditingExpense } from "../../redux/expenseSlice";

export const ResultTable = ({ selectedSortOption }) => {
  const [deleteRowIndex, setDeleteRowIndex] = useState(null); // Состояние для индекса строки, которую нужно удалить
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для отображения/скрытия модального окна
  const initialDataRef = useRef(initialData);

  const sortData = (data, sortOption) => {
    if (sortOption === 'Alphabetically') {
      return [...data].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'By date') {
      return [...data].sort((a, b) => Date.parse(a.date) < Date.parse(b.date));
    } else if (sortOption === 'By spending amount') {
      return [...data].sort((a, b) => a.expenseAmount - b.expenseAmount);
    } else if (sortOption === 'By category') {
        return [...data].sort((a, b) => a.category.localeCompare(b.category))
    } else {
      return data;
    }
  };

    const dispatch = useDispatch();

    const expenses = useSelector(getExpenses);

    useEffect(() => {
        if (!expenses) {
            dispatch(getExpenses);
        }
    }, [dispatch, expenses])

  const handleSortData = () => {
    const sortedData = sortData(initialDataRef.current, selectedSortOption);
    return sortedData;
  };

  const handleDeleteClick = (index) => {
    setDeleteRowIndex(index); // Установите индекс строки для удаления
    setIsModalOpen(true); // Откройте модальное окно
  };

  const handleConfirmDelete = () => {
      dispatch(deleteExpense(deleteRowIndex));
    // Здесь вы можете выполнить удаление строки из данных, используя deleteRowIndex
    // Закройте модальное окно
    setIsModalOpen(false);
  };

  const handleCancelDelete = () => {
    // Отмените удаление и закройте модальное окно
    setDeleteRowIndex(null);
    setIsModalOpen(false);
  };

  const navigate = useNavigate();

  const handleEditClick = (index) => {
      dispatch(setEditingExpense(index));
    navigate('/edit');
  };  
  
  

  return (
    <div>
        <TableContainer>
            <StyledTable>
                <thead>
                <tr>
                    <StyledTh>Date</StyledTh>
                    <StyledTh>Name</StyledTh>
                    <StyledTh>Expense</StyledTh>
                    <StyledTh>Category</StyledTh>
                    <StyledTh>Delete</StyledTh>
                </tr>
                </thead>
                <tbody>
                {sortData(expenses, selectedSortOption).map((row, index) => (
                    <tr key={index}>
                    <StyledTd>{
                        row.date
                    }</StyledTd>
                    <StyledTd>{row.name}</StyledTd>
                    <StyledTd>{row.expenseAmount}</StyledTd>
                    <StyledTd>{row.category}</StyledTd>
                    <StyledTd>
                        <Button
                        view='secondary'
                        onClick={() => handleDeleteClick(index)}
                        style={{
                            margin: '5px',
                            width: '60px',
                        }}
                        >
                        Delete
                        </Button>
                        <Button
                        view='secondary'
                        onClick={() => handleEditClick(index)}
                        style={{
                            margin: '5px',
                            width: '60px',
                        }}
                        >
                        Edit
                        </Button>
                    </StyledTd>
                    </tr>
                ))}
                </tbody>
            </StyledTable>
        </TableContainer>
            {deleteRowIndex !== null && isModalOpen && (
                <Modal isOpen={true} onClose={handleCancelDelete}>
                    <ModalContent>
                        <ModalText>
                            <h2>Confirm delete</h2>
                            <p>Are you sure, you want to completely remove this row?</p>
                        </ModalText>
                        <ButtonContainer>
                            <Button onClick={handleConfirmDelete}>Yes, delete</Button>
                            <Button onClick={handleCancelDelete}>Cancel</Button>
                        </ButtonContainer>
                    </ModalContent>
                </Modal>
            )}
    </div>
  );
};
