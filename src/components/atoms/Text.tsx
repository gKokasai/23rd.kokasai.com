import React, { FC } from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Text: FC<Props> = (props) => {
  const { children, className } = props;
  return <div className={className}>{children}</div>;
};
export default Text;
