import React from 'react';

import Container from './Container';
import ReactTxt from './ReactTxt';
import Img from './Img';
import A from './A';


function ReactJS() {
  return (

    <Container>
      <ReactTxt>Handcrafted with <Img src={require(`./Heart.svg`)} alt="Heart"/> using <A href="https://www.styled-components.com">React Styled Components</A>. Source Code on <A href="https://github.com/zetagraph/zetagraph">Github</A>.</ReactTxt>
    </Container>

  );
}

export default ReactJS;
