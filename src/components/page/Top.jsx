import React, { useContext } from 'react'
import styled from 'styled-components'
import { SecondaryButton } from '../atom/button/SecondaryButton'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../providers/UserProvider'


export const Top = () => {
  const nav = useNavigate();
  const { setUserInfo } = useContext(UserContext);
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    nav("/users")
  }
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    nav("/users")
  }
  return (
    <SContainer>
      <h2>HOME</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    
    </SContainer>
  )
}
const SContainer = styled.div`
  text-align: center;
`