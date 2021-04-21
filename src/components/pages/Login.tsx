import React, { FC } from 'react';
import { Button, CircularProgress, TextField } from '@material-ui/core';
import { useAuth } from '../../contexts/Global';

const Login: FC = () => {
  const auth = useAuth();
  const handleIdForm = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    console.log(event.target.value);
    auth.setUser({ inputId: event.target.value });
  };

  const handlePassWordForm = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    event.preventDefault();
    console.log(event.target.value);
    auth.setUser({ inputPassWord: event.target.value, postedId: true});
  };

  const handleLoginFormSubmit = (event): void => {
    event.preventDefault();
    auth.setUser({ ...auth.user, isLoading: true });
    auth.login();
  };

  const handleIdFormSubmit = (event): void => {
    event.preventDefault();
    auth.getToken();
  };

  console.log(auth.user?.isLoading, auth.user?.postedId);

  if (auth.user?.isLoading === true) {
    return (
      <CircularProgress />
    );
  } if (auth.user?.postedId === undefined) {
    return (
      <form className="login" onSubmit={handleIdFormSubmit}>
        <TextField type="text" onChange={handleIdForm} />
        <Button onClick={handleIdFormSubmit} variant="contained" color="primary">メールを送る</Button>
      </form>
    );
  }
  return (
    <form className="login">
      <TextField type="text" onChange={handleIdForm} defaultValue={auth.user?.inputId} />
      <TextField type="text" onChange={handlePassWordForm} />
      <Button onClick={handleLoginFormSubmit} variant="contained" color="primary">ログインする</Button>
    </form>
  );
};
export default Login;
