import React from 'react'
import styled from 'styled-components'
import { SecondaryButton } from '../atom/button/SecondaryButton'
import { useNavigate } from 'react-router-dom'


export const Top = () => {
  const nav = useNavigate();
  const onClickAdmin = () => {
    nav("/users", { state: { isAdmin: true } })
  }
  const onClickGeneral = () => {
    nav("/users", { state: { isAdmin: false } })
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