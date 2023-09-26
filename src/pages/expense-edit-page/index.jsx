import React, {useState} from "react";
import { Wrapper, Top, Bottom } from './index.style';
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { SelectChooseCategory } from '../../components/select';
import { useNavigate, Navigate } from "react-router-dom";
import { getExpenses, getEditingExpense, updateExpense } from "../../redux/expenseSlice";
import { useSelector, useDispatch } from "react-redux";


export const ExpenseEditPage = () => {

    const navigate = useNavigate();

    const handleClickCancel = () => {
      navigate('/');
    };

    const editingExpense = useSelector(getEditingExpense);
    const expenses = useSelector(getExpenses);

    const [editedDate, setEditedDate] = useState(expenses[editingExpense].date);
    const [editedName, setEditedName] = useState(expenses[editingExpense].name);
    const [editedAmount, setEditedAmount] = useState(expenses[editingExpense].expenseAmount);
    const [editedCategory, setEditedCategory] = useState(expenses[editingExpense].category);

    const dispatch = useDispatch();

    const onDateChange = (event) => {
        setEditedDate(event.target.value);
    }
    
    const onNameChange = (event) => {
        setEditedName(event.target.value);
    }

    const onAmountChange = (event) => {
        setEditedAmount(event.target.value);
    }

    const onCategoryChange = (name) => {
        setEditedCategory(name);
    }

    const onUpdateExpense = () => {
        dispatch(updateExpense(
            {
                id: editingExpense,
                date: editedDate,
                expenseName: editedName,
                amount: editedAmount,
                selectedCategory: editedCategory,
            }
        ));
        navigate("/");
    }

    return (
        <Wrapper>
            <Top>
                <Input
                    size='xl' 
                    placeholder="Date"
                    value={editedDate} 
                    name="DateOfAmount"
                    type="date"
                    onChange={onDateChange}
                    style = {{width: "180px"}}
                />
                <Input
                    size='xl' 
                    placeholder="Name of amount"
                    value={editedName} 
                    name="NameOfAmount"
                    onChange={onNameChange}
                />
                <Input
                    size='xl' 
                    placeholder="Amount"
                    value={editedAmount} 
                    name="Amount"
                    onChange={onAmountChange}
                />
                <div>
                <h3>Choose category</h3>
                <SelectChooseCategory
                    onCategoryChange={onCategoryChange}
                    prevSelectedCategory={expenses[editingExpense].category}
                />
                </div>
            </Top>
            <Bottom>
                <Button
                    size='xl' 
                    view='primary'
                    style = {{width: "215px"}}
                    onClick={onUpdateExpense}
                >
                    Update expense
                </Button>
                <Button
                size='xl' 
                view='primary'
                onClick={handleClickCancel}
                style = {{width: "215px"}}
            >
                Cancel
            </Button>
            </Bottom>
        </Wrapper>
    );

};
