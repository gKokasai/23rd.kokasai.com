import React, { FC } from 'react';

type Props = {
    user: string;
    isLoggedIn: boolean;
}
const Acccount: FC<Props> = (props) => (
  <div>
    {props.user}
    でログイン中です。
  </div>
);
export default Acccount;
