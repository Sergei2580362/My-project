import React from "react";
import { Wrapper, RegisterWrapper } from './index.style';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { registerUser } from "../../redux/authSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../redux/authSelectors";
import { Navigate } from "react-router-dom";


export const RegisterPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getUser);
  const handleLoginClick = () => {
        dispatch(registerUser({email, password}));
  }

  useEffect(() => {
    if (user) {
    navigate('/');
    }
  }, [user, navigate]);

  const changeHandler = ({ target }) => {
    const setters = {
        email: setEmail,
        password: setPassword,
        confirmPassword: () => {},
    };
  
    setters[target.name](target.value);
  };

  return user ? <Navigate to='/'/> : (
    <Wrapper>
      <RegisterWrapper>
      <h1>REGISTER FORM</h1>
        <Input 
          size='xl' 
          placeholder="Enter email"  
          value={email} 
          name="email"
          onChange={changeHandler}
        />
        <Input 
          size='xl' 
          placeholder="Enter password" 
          value={password} 
          name="password" 
          onChange={changeHandler}
        />
        <Button 
          size='xl' 
          view='primary' 
          onClick={handleLoginClick}>
            Create account
        </Button>
        <Button 
          size='xl' 
          view='secondary'>
            <a 
              href='/' 
              style = {{"textDecoration": "none", color: "black"}}
            >
              Already have account?
            </a>
          </Button>
      </RegisterWrapper>
    </Wrapper>
  )
};
