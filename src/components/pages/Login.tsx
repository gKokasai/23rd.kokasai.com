import React, { FC, useContext } from 'react';
import { Button, CircularProgress, TextField } from '@material-ui/core';
import { GlobalContext, GlobalProvider } from '../../contexts/Global';
import { getToken, login } from '../../api/api';

const Login: FC = () => {
  const {
    inputId,
    setInputId,
    inputPassWord,
    setInputPassWord,
    /*
    isLoggedIn,
    setIsLoggedIn,
    isLoading,
    setIsLoading,
    postedId,
    setPostedId,
 */
  } = useContext(GlobalContext);

  const handleEmailForm = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    console.log(event.target.value);
    setInputId({ state: event.target.value });
  };

  const handlePassWordForm = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    console.log(event.target.value);
    setInputPassWord({ state: event.target.value });
  };

  const handleLoginFormSubmit = (event): void => {
    event.preventDefault();
    setIsLoading({ state: true });
    const result = login(inputId.state, inputPassWord.state).then(() => { setIsLoading({ state: false }); });
    console.log(result);
  };

  const handleIdFormSubmit = (event): void => {
    event.preventDefault();
    setPostedId({ state: true });
    const result = getToken(inputId.state);
    console.log(result);
  };

  if (isLoading.state === true) {
    return (
      <CircularProgress />
    );
  } if (postedId.state === false) {
    return (
      <form className="login" onSubmit={handleIdFormSubmit}>
        <TextField type="text" onChange={handleEmailForm} />
        <Button onClick={handleIdFormSubmit} variant="contained" color="primary">ログイン</Button>
      </form>
    );
  }
  return (
    <form className="login">
      <TextField type="text" onChange={handleEmailForm} defaultValue={inputId.state} />
      <TextField type="text" onChange={handlePassWordForm} />
      <Button onClick={handleLoginFormSubmit} variant="contained" color="primary">メールを送る</Button>
    </form>
  );
};
export default Login;
