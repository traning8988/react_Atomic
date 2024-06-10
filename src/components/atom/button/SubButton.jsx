import React from 'react'
import { styled } from 'styled-components';
import { BaseButton } from './BaseButton';

export const SubButton = (props) => {
  const { children } = props;
  return (
    <SButton>{children}</SButton>
  );
};
 const SButton = styled(BaseButton)`
  
 `;