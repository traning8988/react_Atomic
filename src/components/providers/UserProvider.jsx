import React from 'react'
import { createContext } from 'react'

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const contextName = "田中";
  return (
    <UserContext.Provider value={contextName}>
      {children}
    </UserContext.Provider>
  )
}
