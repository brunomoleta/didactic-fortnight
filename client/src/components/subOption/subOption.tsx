import React from 'react';
import { buttonText } from '../../database/database';
import type { IsubscriptionOptions } from '../../../types/static';
import { nanoid } from 'nanoid';
import rootSettings from '../../styled-components/root';
import styled from 'styled-components';

import { AlertTriangle } from 'react-feather';
import { Check } from 'react-feather';

const CardName = styled.h2`
  font-weight: 600;
  line-height: ${rootSettings.fontType.h2.lineHeight};
  font-size: ${rootSettings.fontType.h2.fontSize};
`;

const LiWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const renderIcon = (text: string, string: string) =>
  text.includes(string) ? <AlertTriangle /> : <Check />;

const LiOption = styled.li``;

const renderOption = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1).replace(/ 000/g, '');

function SubOption({ option }: { option: IsubscriptionOptions }) {
  return (
    <>
      <CardName>{renderOption(option.type)}</CardName>
      <h3>{option.storage} GB</h3>
      <p>{option.numberUsers} users</p>

      <ul>
        {option.text.map((phrase: string) => (
          <LiWrapper>
            {renderIcon(phrase, '000')}
            <LiOption key={nanoid()}>{renderOption(phrase)}</LiOption>
          </LiWrapper>
        ))}
      </ul>
      <p>{option.price}</p>
      <button>{buttonText.subscriptionOption}</button>
    </>
  );
}

export default SubOption;
