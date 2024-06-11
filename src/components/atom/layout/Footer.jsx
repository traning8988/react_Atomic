import React from 'react'
import { styled } from 'styled-components'

export const Footer = () => {
  return (
    <SFooter>
      &copy; 2021 test Inc.
    </SFooter>
  );
};
const SFooter = styled.footer`
  background: red;
  color: #fff;
  text-align: center;
  padding: 8px 0px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
