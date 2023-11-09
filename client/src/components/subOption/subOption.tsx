import React from 'react';
import { subscriptionOption } from '../../database/database';
import type { IsubscriptionOptions } from '../../../types/static';
import { nanoid } from 'nanoid';
import rootSettings from '../../styled-components/root';

import { Check, AlertTriangle, CheckCircle, ChevronRight } from 'react-feather';

import Button from '../Button';
import {
  CardName,
  Details,
  KeyFeats,
  KeyFeatsWrapper,
  LiWrapper,
  Persona,
  Price,
  UList,
  SumWrapper
} from '../../styled-components/cardClasses';
import { Link } from 'react-router-dom';

const renderIcon = (text: string, string: string)  =>
  text.includes(string) ? (
    <AlertTriangle color={rootSettings.colors.red} />
  ) : (
    <Check color={rootSettings.colors.primaryMedium} />
  );

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
      <Button
        to="/signup" as={Link}
        $ultimate={option.type === subscriptionOption[1].type}>
        {option.buttonText}
      </Button>

      <KeyFeatsWrapper>
        <KeyFeats>Key features:</KeyFeats>
        <UList>
          {option.keyFeatures.map((phrase: string) => (
            <LiWrapper key={nanoid()}>
              {renderIcon(phrase, '000')}
              <li>{renderOption(phrase)}</li>
            </LiWrapper>
          ))}
        </UList>
      </KeyFeatsWrapper>
      <Details>
        <summary>
          <LiWrapper>
            <ChevronRight color={rootSettings.colors.primary}/>
            <span style={{ textDecoration: 'underline'}}>
            See all features
            </span>
          </LiWrapper>
        </summary>
        {option.text.map((item: string) => (
          <UList>
            <LiWrapper>
              <CheckCircle color={rootSettings.colors.primary} />
              <li key={nanoid()}>{renderOption(item)}</li>
            </LiWrapper>
          </UList>
        ))}
      </Details>
    </>
  );
}

export default SubOption;
