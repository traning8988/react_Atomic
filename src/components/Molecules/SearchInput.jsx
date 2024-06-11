import React from 'react'
import { PrimaryButton } from '../atom/button/PrimaryButton'
import { Input } from '../atom/input/Input'
import { styled } from 'styled-components'

export const SearchInput = () => {
  return (
    <SButtonContainer>
      <Input placeholder="検索条件を入力"/>
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SButtonContainer>
  );
};
const SButtonWrapper = styled.div`
  padding-left: 8px;
`;

const SButtonContainer = styled.div`
  display: flex;
  aline-items: center;
`;