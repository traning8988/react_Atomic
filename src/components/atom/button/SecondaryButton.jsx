import React from 'react'
import styled from "styled-components"
import { BaseButton } from './BaseButton';

export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return (
    <SButton onClick={onClick}>{children}</SButton>
  );
};

const SButton = styled(BaseButton)`
  background: #11999e;
`;