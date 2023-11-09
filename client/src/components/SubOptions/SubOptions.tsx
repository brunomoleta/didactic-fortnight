import React from 'react';
import { subscriptionOption } from '../../database/database';
import SubOption from '../subOption';
import type { IsubscriptionOptions } from '../../../types/static';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import rootSettings from '../../styled-components/root';

const LiOption = styled.li<{ $ultimate?: boolean }>`
  border: 1px solid ${rootSettings.colors.grey};
  background-color: ${(props) =>
    props.$ultimate ? 'hsl(228, 100%, 66%)' : 'white'};
`;

const CardList = styled.ol`
  display: flex;
  flex-flow: column;
  gap: 32px;
`;

function SubOptions() {
  return (
    <CardList>
      {subscriptionOption.map((item: IsubscriptionOptions) => (
        <LiOption
          $ultimate={item.type === subscriptionOption[2].type}
          key={nanoid()}
        >
          <SubOption option={item} />
        </LiOption>
      ))}
    </CardList>
  );
}

export default SubOptions;
