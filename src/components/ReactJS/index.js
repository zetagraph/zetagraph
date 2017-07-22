import React from 'react';

import Container from './Container';
import Title from './Title';
import ReactTxt from './ReactTxt';
import Img from './Img';
import A from '../A';


function ReactJS() {
  return (

    <Container>
      <Title>React JS</Title>
      <ReactTxt>This page is build with <A href="https://www.styled-components.com">React Styled Components</A>. Source Code on <A href="https://github.com/zetagraph/zetagraph">Github</A>.</ReactTxt>
      <a href={"https://facebook.github.io/react"}><Img src={require(`./React.svg`)} alt="React"/></a>
    </Container>

  );
}

export default ReactJS;
