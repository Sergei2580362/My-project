import React, { useState, useEffect, useRef } from "react";
import { LeftSide, RightSide, RightSideTop, RightSideBottom, Wrapper } from "./index.style";
import { Navigate } from "react-router-dom";
import { getUser } from "../../redux/authSelectors";
import { useDispatch, useSelector } from "react-redux";
import { MainMenu } from "../../components/main-menu";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { ResultTable } from "../../components/table";
import { SelectChooseCategory, SelectSorting, SelectTableView } from "../../components/select";
import { getCategories, categoriesSelector } from "../../redux/categorySlice";

import {addExpense} from "../../redux/expenseSlice"

export const ListOfOptions1 = () => {

  const categories = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!categories) {
      dispatch(getCategories());
    }
  }, [categories, dispatch]);

  if (!Array.isArray(categories.categoryItems)) {
    return <div>Categories is not an array</div>;
  }

  return (
    <div>
      <h2>Category you have:</h2>
      <div>
        {categories.categoryItems?.map((option, index) => (
          <div key={index}>
            <div>{option}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const MainPage = () => {
  const [ selectedSortOption, setSelectedSortOption ] = useState('');
  const [ date, setDate ] = useState ('');
  const [ expenseName, setExpenseName] = useState ('');
  const [ amount, setAmount] = useState ('');
  const [selectedCategory, setSelectedCategory] = useState(''); // Состояние для хранения выбранной категории

  const dateHandler = (event) => {
    setDate(event.target.value);
  };

  const expenseNameHandler = (event) => {
    setExpenseName(event.target.value);
  };

  const handleCategoryChange = (selectedValue) => {
    setSelectedCategory(selectedValue); // Обновляем состояние выбранной категории
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

    const dispatch = useDispatch();

    const onAddExpense = () => {
        dispatch(
            addExpense(
                {
                    date: date,
                    amount: amount,
                    selectedCategory: selectedCategory,
                    expenseName: expenseName
                }
            )
        )
    };

  const handleSortOptionChange = (event) => {
      console.log("Change sort order");
      console.log(event.target.value);
        setSelectedSortOption(event.target.value);
  };
  
    const user = useSelector(getUser);

  return user ? 
    (<Wrapper>
        <MainMenu/>
        <LeftSide>
            <Input
                size='xl' 
                placeholder="Date"
                type="date"
                value={date} 
                name="DateOfAmount"
                onChange={dateHandler}
            />
            <Input
                size='xl' 
                placeholder="Expense name"
                value={expenseName} 
                name="ExpenseName"
                onChange={expenseNameHandler}
            />
            <Input
                size='xl' 
                placeholder="Amount"
                value={amount} 
                name="Amount"
                onChange={amountHandler}
            />
            <div>
                <h3>Choose category</h3>
                <SelectChooseCategory
                  onCategoryChange={handleCategoryChange}
                />
            </div>
            <Button
                size='xl' 
                view='primary'
                style = {{width: "215px"}}
                onClick = {onAddExpense}
            >
                Add expense
            </Button>
        </LeftSide>
        <RightSide>
            <RightSideTop>
                <div>
                    <h3>Select type of sorting</h3>
                    <SelectSorting
                        value={selectedSortOption}
                        onChange={handleSortOptionChange}
                    />
                </div>
                <div>
                    <h3>Select table view</h3>
                    <SelectTableView/>
                </div>
            </RightSideTop>
            <RightSideBottom>
                <ResultTable selectedSortOption={selectedSortOption} />
            </RightSideBottom>
        </RightSide>
    </Wrapper>)
    
    : <Navigate to='/login'/>
    
};
