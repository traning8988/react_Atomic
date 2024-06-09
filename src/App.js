import React from 'react'
import "./App.css"
import { PrimaryButton } from './components/atom/button/PrimaryButton';
import { SecondaryButton } from './components/atom/button/SecondaryButton';


export default function App() {
  return (
    <div className='App'>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>うんこ</SecondaryButton>
    </div>
  );
};
