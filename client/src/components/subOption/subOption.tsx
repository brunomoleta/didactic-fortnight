import React from 'react';
import { buttonText } from '../../database/database';
import type { IsubscriptionOptions } from '../../../types/static';

function SubOption({ option }: { option: IsubscriptionOptions }) {
  return (
    <>
      <h2>{option.type}</h2>
      <h3>{option.storage} GB</h3>
      <p>{option.numberUsers} users</p>

      <ul>
        {option.text.map((phrase: string) => (
          <li>{phrase}</li>
        ))}
      </ul>
      <p>{option.price}</p>
      <button>{buttonText.subscriptionOption}</button>
    </>
  );
}

export default SubOption;
