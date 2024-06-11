import React from 'react'
import styled  from 'styled-components'
import { SearchInput } from '../Molecules/SearchInput'
import { UserCard } from '../organism/user/UserCard'

export const Users = () => {
const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `うんこ${val}`,
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
    email: "111@example.com",
    tel: "000-0000-0000",
    company: {
      name: "うんこ株式会社"
    },
    website: "http://google.com"
  }
})
  
return (
  <SContainer>
    <h2>ユーザー一覧</h2>
    <SearchInput />
    <SUserArea>
      {users.map((user) => (
        <UserCard key={user.id} user={user}/>
      ))}
    </SUserArea>
  </SContainer>
  )
}
const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;