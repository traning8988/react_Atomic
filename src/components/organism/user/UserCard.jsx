import React from 'react'
import { styled } from 'styled-components'
import { Card } from '../../atom/card/Card';
import { UserIconWithName } from '../../Molecules/user/UserIconWithName';

export const UserCard = (props) => {
  const { user, isAdmin } = props;

  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} isAdmin={isAdmin} />
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.tel}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
};
const SDl = styled.dl`
  text-aline: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;