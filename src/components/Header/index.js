import React from 'react';

import Container from './Container';
import Title from './Title';
import SubTitle from './SubTitle';
import Img from './Img';


function Header() {
  return (

    <Container>
      <Title>Andrei Zvonkov</Title>
      <SubTitle>Front End Developer &middot; UI Designer</SubTitle>
      <Img src={require(`./AndreiZvonkov.jpg`)} alt="Andrei Zvonkov" />
    </Container>

  );
}

export default Header;
