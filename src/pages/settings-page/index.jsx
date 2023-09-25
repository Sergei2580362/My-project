import React, { useState, useEffect, useRef } from "react";
import { Wrapper, Top, Bottom } from './index.style';
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { SelectChooseCategory } from '../main-page/index';
import { ListOfOptions1 } from '../main-page/index';
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, getCategories } from "../../redux/categorySlice";
import { getUser } from "../../redux/authSelectors";


export const SettingsPage = () => {
    
    const [categoryText, setCategoryText] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const categories = useSelector(getCategories);

    const onCategoryTextChange = (event) => {
        setCategoryText(event.target.value);
    };

    const onAddCategory = () => {
        dispatch(addCategory(categoryText));
    };

    const handleClickCancel = () => {
      navigate('/');
    };  

    return (
        <Wrapper>
            <Top>
                <h1>Settings</h1>
                <div>
                    <ListOfOptions1 />
                </div>
                <Input
                    size='xl' 
                    placeholder="Name of category"
                    type="text"
                    value={categoryText}
                    onChange={onCategoryTextChange} 
                    name="NameOfAmount"
                />
            </Top>
            <Bottom>
                <Button
                    size='xl' 
                    view='primary'
                    onClick={onAddCategory}
                    style = {{width: "215px"}}
                >
                    Add category
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
