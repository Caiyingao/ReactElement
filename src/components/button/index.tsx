import { IProps } from './interface';
import React from 'react';
import { Button } from 'antd';
const BxButton: React.FC<IProps> = props => {
  return (
    <>
      <Button {...props}>{props.children}</Button>
    </>
  );
};

export default BxButton;
