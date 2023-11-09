import React from 'react';
import { homeHero, homeParagraph } from '../../database/database';
import Logo from '../../components/Logo';
import SubOptions from '../../components/SubOptions';
import { OverallBody } from '../../styled-components/sharedStyles';

function Homepage() {

  return (
    <>
      <OverallBody>
        <Logo />
        <h1>{homeHero}</h1>
        <p>{homeParagraph}</p>
        <SubOptions />
      </OverallBody>
    </>
  );
}

export default Homepage;
