import React, { useState, FC } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Base64 } from "js-base64";

const ForCumpus: FC = (): JSX.Element => {
  const [inputEmail, setInputEmail] = useState("");
  const handleEmailForm = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputEmail(event.target.value);
  };

  const [inputPassWord, setInputPassWord] = useState("");
  const handlePassWordForm = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputPassWord(event.target.value);
  };

  const encodeToBase64: any = (email: any, passWord: any) => {
    return Base64.encode(email + ":" + passWord);
  };

  const createHeader: any = () => {
    const emailAndPassword: string = encodeToBase64(inputEmail, inputPassWord);
    const headers = {
      Authorization: `Basic ${emailAndPassword}`,
    };
    return headers;
  };

  const login = () => {
    const loginEndPointUrl: string = "/login";
    const header = createHeader();
    axios
      .post(loginEndPointUrl, null, {
        headers: header,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form onSubmit={() => console.log(inputEmail, inputPassWord)}>
      <input type="text" onChange={handleEmailForm} />
      <input type="text" onChange={handlePassWordForm} />
      <Link to="/account">
        <button onClick={() => login()}>Login</button>
      </Link>
    </form>
  );
};
export default ForCumpus;
