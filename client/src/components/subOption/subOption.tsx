import React from 'react';
import { buttonText } from '../../database/database';
import type { IsubscriptionOptions } from '../../../types/static';
import { nanoid } from 'nanoid';
import rootSettings from '../../styled-components/root';
import styled from 'styled-components';

import { Check, AlertTriangle, CheckCircle } from 'react-feather';

import Button from '../Button';

const CardName = styled.h2`
  font-weight: ${rootSettings.fontWeight.bold};
  letter-spacing: ${rootSettings.fontType.h2.letterSpacing};
  line-height: ${rootSettings.fontType.h2.lineHeight};
  font-size: ${rootSettings.fontType.h2.fontSize};
`;
const Persona = styled.h3`
  color: ${rootSettings.colors.primary};
  font-weight: ${rootSettings.fontWeight.normal};
  font-size: ${rootSettings.fontType.body2.fontSize};
  line-height: ${rootSettings.fontType.body2.lineHeight};
`;
const KeyFeats = styled.h4`
  font-weight: ${rootSettings.fontWeight.semiBold};
  font-size: ${rootSettings.fontType.body2.fontSize};
  line-height: ${rootSettings.fontType.body2.lineHeight};
`;
const Price = styled.h3`
  font-weight: ${rootSettings.fontWeight.medium};
  font-size: ${rootSettings.fontType.h2.fontSize};
  line-height: ${rootSettings.fontType.h1.lineHeight};
`;

const LiWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const renderIcon = (text: string, string: string) =>
  text.includes(string) ? (
    <AlertTriangle color={rootSettings.colors.red} />
  ) : (
    <Check color={rootSettings.colors.primaryMedium} />
  );

const LiOption = styled.li``;

export const renderOption = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1).replace(/ 000/g, '');

function SubOption({ option }: { option: IsubscriptionOptions }) {
  return (
    <>
      <CardName>{renderOption(option.type)}</CardName>
      <Persona>For {option.persona}</Persona>
      <Price>
        {typeof option.price !== 'string'
          ? '$' + option.price
          : renderOption(option.price)}
      </Price>

      <Button>{option.buttonText}</Button>

      <KeyFeats>Key features:</KeyFeats>
      <ul>
        {option.keyFeatures.map((phrase: string) => (
          <LiWrapper>
            {renderIcon(phrase, '000')}
            <LiOption key={nanoid()}>{renderOption(phrase)}</LiOption>
          </LiWrapper>
        ))}
      </ul>
      <details>
        <summary>See all features</summary>
        {option.text.map((item: string) => (
          <LiWrapper>
            <CheckCircle color={rootSettings.colors.primary} />
            <LiOption key={nanoid()}>{renderOption(item)}</LiOption>
          </LiWrapper>
        ))}
      </details>
    </>
  );
}

export default SubOption;
