import React from 'react';
import { subscriptionOption } from '../../database/database';
import SubOption from '../subOption';
import type { IsubscriptionOptions } from '../../../types/static';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import rootSettings from '../../styled-components/root';
import { Link } from 'react-router-dom';

const LiOption = styled.li<{ $ultimate?: boolean }>`
  background-color: ${(props) =>
    props.$ultimate
      ? rootSettings.colors.primaryUnsaturated
      : rootSettings.colors.offWhite};
  border-radius: 12px;
  padding-inline: 48px;
  padding-block: 36px;
  box-shadow: 0px 50px 50px -25px rgba(75, 92, 154, 0.25);
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

          $ultimate={item.type === subscriptionOption[1].type}
          key={nanoid()}
        >
          <SubOption option={item} />
        </LiOption>
      ))}
    </CardList>
  );
}

export default SubOptions;
