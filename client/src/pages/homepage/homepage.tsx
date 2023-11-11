import React from 'react';
import { buttonText, homeHero, homeParagraph } from '../../database/database';
import Logo from '../../components/Logo';
import SubOptions from '../../components/SubOptions';
import { OverallBody } from '../../styled-components/sharedStyles';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import Countdown from '../../components/countdown';

function Homepage() {
  return (
    <>
      <OverallBody>
        <Logo />
        <h1>{homeHero}</h1>
        <p>{homeParagraph}</p>
        <Button to="/signup" as={Link}>
          {buttonText.heroHome}
        </Button>
        <Countdown />
        <SubOptions />
      </OverallBody>
    </>
  );
}

export default Homepage;
