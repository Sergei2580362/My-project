import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomSelect, CustomOption } from "./index.style";
import { optionsForCategory, optionsForSorting, optionsForTanleView } from "../../mock";
import { getCategories } from "../../redux/categorySlice";



export const SelectChooseCategory = ({ onCategoryChange, prevSelectedCategory }) => {
    const [selectedCategory, setSelectedCategory] = useState(prevSelectedCategory); // Инициализируем состояние пустой строкой

    const dispatch = useDispatch();

    const myCategories = useSelector((state) => state.categories);
    useEffect(() => {
        if (!myCategories) {
            dispatch(getCategories());
        }
    }, [myCategories, dispatch]);

    const handleCategoryChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedCategory(selectedValue); // Обновляем состояние при выборе значения
        onCategoryChange(selectedValue); // Вызываем функцию обратного вызова для передачи значения в родительский компонент
    };

    return (
        <CustomSelect value={selectedCategory} onChange={handleCategoryChange}>
            <CustomOption key='' value=''>
                Choose category...
            </CustomOption>
            {myCategories.categoryItems?.map((option) => (
                <CustomOption key={option} value={option}>
                    {option}
                </CustomOption>
            ))}
        </CustomSelect>
    );
};


export const SelectSorting = ({onChange}) => {
    const [selectedSort, onSortChange] = useState('');

    const handleSortChange = (event) => {
        console.log('Handle sort change');
        onSortChange(event.target.value);
        onChange(event);
    };

    return <CustomSelect onChange={handleSortChange}>
      {optionsForSorting.map((option) => (
        <CustomOption key={option.value} value={option.value}>
          {option.label}
        </CustomOption>
      ))}
    </CustomSelect>
};


export const SelectTableView = () => (
    <CustomSelect>
      {optionsForTanleView.map((option) => (
        <CustomOption key={option.value} value={option.value}>
          {option.label}
        </CustomOption>
      ))}
    </CustomSelect>
  );
