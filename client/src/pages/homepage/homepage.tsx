import React from 'react';
import { homeHero, homeParagraph } from '../../database/database';
import Logo from '../../components/Logo';
import SubOptions from '../../components/SubOptions';

function Homepage() {
  return (
    <>
      <Logo/>
      <h1>{homeHero}</h1>
      <p>{homeParagraph}</p>
      <SubOptions/>
    </>
  );
}

export default Homepage;
