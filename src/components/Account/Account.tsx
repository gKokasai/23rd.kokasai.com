import React, { FC } from 'react';
// import { Route } from 'react-router-dom';

type Props = {
    user: string;
    isLoggedIn: boolean;
}
const Acccount: FC<Props> = (props): JSX.Element => {
  const { user, isLoggedIn } = props;
  if (isLoggedIn) {
    return (
      <div>
        {user}
        でログイン中です。
      </div>
    );
  }
  return (
    <div>ログインしていません。</div>
  );
};
export default Acccount;
