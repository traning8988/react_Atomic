import React from 'react'
import "./App.css"
import { PrimaryButton } from './components/atom/button/PrimaryButton';
import { SecondaryButton } from './components/atom/button/SecondaryButton';
import { SubButton } from './components/atom/button/SubButton';
import { SearchInput } from './components/Molecules/SearchInput';
import { UserCard } from './components/organism/user/UserCard';

const user = {
  name: "うんこ",
  image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
  email: "111@example.comp",
  tel: "000-0000-0000",
  company: {
    name: "うんこ株式会社"
  },
  website: "http://google.com"
}


export default function App() {
  return (
    <div>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>うんこ</SecondaryButton>
      <SubButton>サブボタン</SubButton>
      <br />
      <SearchInput></SearchInput>
      <br />
      <UserCard user={user}></UserCard>
    </div>
    
  );
};
