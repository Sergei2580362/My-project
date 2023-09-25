import React from "react";
import { Wrapper, LoginWrapper } from './index.style';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { loginWithGoogle, registerUser, signInUser } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/authSelectors";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



export const LoginPage = () => {

  const navigate = useNavigate();
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
    navigate('/');
    }
  }, [user, navigate]);

  const handleLoginClick = () => {
      dispatch(signInUser({email, password}));
    }

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle());
  };
  
  const changeHandler = ({ target }) => {
    const setters = {
        email: setEmail,
        password: setPassword,
        confirmPassword: () => {},
    };

    setters[target.name](target.value);
  };
  
  return (
    <Wrapper>
      <LoginWrapper>
        <h1>Welcome</h1>
        <h2>Please, enter your account</h2>
        <Input 
          size='xl' 
          placeholder="Login"
          value={email} 
          name="email"
          onChange={changeHandler}
        />
        <Input 
          size='xl' 
          placeholder="Password"
          value={password} 
          name="password" 
          onChange={changeHandler}
        />
        <Button 
          size='xl' 
          view='primary' 
          onClick={handleLoginClick}>
            LOGIN
        </Button>
        <Button 
          size='xl' 
          view='primary' 
          onClick={handleGoogleLogin}>
            Sign up with GOOGLE
        </Button>
        <Button 
          size='xl' 
          view='secondary'>
            <a 
              href='/register' 
              style = {{"textDecoration": "none", color: "black"}}
            >
          <div>
              Register
          </div>
            </a>
          </Button>
      </LoginWrapper>
    </Wrapper>
  )
};
