import React from 'react';

import Container from './Container';
import Img from './Img';


function Footer() {
  return (

    <Container>
      <a href="https://www.linkedin.com/in/andreizvonkov"><Img src={require(`./Linkedin.svg`)} alt="Icon" /></a>
      <a href="https://github.com/zetagraph"><Img src={require(`./Github.svg`)} alt="Icon" /></a>
      <a href="https://www.drupal.org/u/zetagraph"><Img src={require(`./Drupal.svg`)} alt="Icon" /></a>
      <a href="https://twitter.com/zetagraph"><Img src={require(`./Twitter.svg`)} alt="Icon" /></a>
      <a href="https://medium.com/@zetagraph"><Img src={require(`./Medium.svg`)} alt="Icon" /></a>
      <a href="mailto:zvonkov@gmail.com"><Img src={require(`./Email.svg`)} alt="Icon" /></a>
    </Container>

  );
}

export default Footer;
