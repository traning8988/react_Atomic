import React from 'react'
import "./App.css"
import { PrimaryButton } from './components/atom/button/PrimaryButton';
import { SecondaryButton } from './components/atom/button/SecondaryButton';
import { SubButton } from './components/atom/button/SubButton';
import { SearchInput } from './components/Molecules/SearchInput';

export default function App() {
  return (
    <div className='App'>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>うんこ</SecondaryButton>
      <SubButton>サブボタン</SubButton>
      <br />
      <SearchInput></SearchInput>
    </div>
  );
};
