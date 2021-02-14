import React, { useState, FC } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Base64 } from 'js-base64';

type Props = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<string>>;
};

const Login: FC<Props> = (props): JSX.Element => {
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

  const encodeToBase64 = (email: string, passWord: string): string => Base64.encode(`${email}:${passWord}`);

  const createHeader = (): { [key: string]: string } => {
    const emailAndPassword: string = encodeToBase64(inputEmail, inputPassWord);
    const headers: {
      [key: string]: string;
    } = {
      Authorization: `Basic ${emailAndPassword}`,
    };
    return headers;
  };

  const login = () => {
    const loginEndPointUrl = '/login';
    const header = createHeader();
    axios
      .post(loginEndPointUrl, null, {
        headers: header,
      })
      .then(() => {
        props.setIsLoggedIn(true);
        props.setUser(inputEmail);
        setInputEmail('');
        setInputPassWord('');
      });
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
