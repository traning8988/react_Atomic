import React from 'react'
import "./App.css"
// import { PrimaryButton } from './components/atom/button/PrimaryButton';
// import { SecondaryButton } from './components/atom/button/SecondaryButton';
// import { SubButton } from './components/atom/button/SubButton';
// import { SearchInput } from './components/Molecules/SearchInput';
// import { UserCard } from './components/organism/user/UserCard';
// import { HeaderOnly } from './components/template/HeaderOnly';
// import { DefaultLayout } from './components/template/DefaultLayout';
// import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';

export default function App() {
  return (
    <Router />
  //   <BrowserRouter>
  //     <DefaultLayout>
  //       <PrimaryButton>テスト</PrimaryButton>
  //       <SecondaryButton>うんこ</SecondaryButton>
  //       <SubButton>サブボタン</SubButton>
  //       <br />
  //       <SearchInput></SearchInput>
  //       <br />
  //       <UserCard user={user}></UserCard>
  //     </DefaultLayout>
  // </BrowserRouter>
  );
};
