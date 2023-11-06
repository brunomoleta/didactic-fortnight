import React from 'react';
import { subscriptionOption } from '../../database/database';
import SubOption from '../subOption';
import type { IsubscriptionOptions } from '../../../types/static';

function SubOptions() {
  return (
    <div>
      {subscriptionOption.map((item:IsubscriptionOptions) => (
        <>
          <SubOption option={item}/>
        </>
      ))}
    </div>
  );
}

export default SubOptions;
