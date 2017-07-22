import React from 'react';

import Container from './Container';
import Title from './Title';
import DrupalTxt from './DrupalTxt';
import Img from './Img';
import A from '../A';


function Drupal() {
  return (

    <Container>
      <Title>Drupal</Title>
      <DrupalTxt>Specializing in <A href="https://drupal.org">Drupal</A> as one of the most robust, free, <span>open source</span> solutions.</DrupalTxt>
      <a href="https://drupal.org"><Img src={require(`./Drupal.svg`)} alt="Drupal" /></a>
    </Container>

  );
}

export default Drupal;
