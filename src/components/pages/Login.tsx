import React, { useState, FC } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../api/api';

type Props = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<string>>;
};

const Login: FC<Props> = (props): JSX.Element => {
  const { setIsLoggedIn, setUser } = props;
  const [inputEmail, setInputEmail] = useState('');
  const handleEmailForm = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setInputEmail(event.target.value);
  };

  const [inputPassWord, setInputPassWord] = useState('');
  const handlePassWordForm = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setInputPassWord(event.target.value);
  };

  const login = (): void => {
    const api = new Api(inputEmail, inputPassWord);
    api.login();
    setIsLoggedIn(true);
    setUser(inputEmail);
    setInputEmail('');
    setInputPassWord('');
  };

  return (
    <form className="login">
      <input type="text" onChange={handleEmailForm} />
      <input type="text" onChange={handlePassWordForm} />
      <Link to="/account">
        <button type="button" onClick={() => login()}>
          Login
        </button>
      </Link>
    </form>
  );
};
export default Login;
