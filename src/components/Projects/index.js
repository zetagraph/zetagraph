import React from 'react';

import Container from './Container';
import ProjectsTxt from './ProjectsTxt';
import Title from './Title';
import A from '../A';


function Projects() {
  return (

    <Container>
      <Title>Recent Projects</Title>
      <ProjectsTxt>I work as a <span>Senior Front End Developer</span> at <A href="https://appnovation.com">appnovation.com</A> bellow are few examples of my recent work</ProjectsTxt>
    </Container>

  );
}

export default Projects;
