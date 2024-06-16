import React, { useContext } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';

export const UserIconWithName = (props) => {
  const { userInfo } = useContext(UserContext);
  console.log(userInfo);
  const { name, image } = props;
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImg width={160}
        height={160}
        src={image} 
        alt={name} 
      />
      <SName>{name}</SName>
      {isAdmin && <SLink to="*">編集</SLink>}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0px;
  color: #fbc;
`;

const SLink = styled(Link)`
 color: #aaa;
`;