import React from 'react';

import Container from './Container';
import ProjectsTxt from './ProjectsTxt';
import Title from './Title';
import SubTitle from './SubTitle';
import A from '../A';


function Projects() {
  return (

    <Container>
      <ProjectsTxt>I work as a <span>Senior Front End Developer</span> at <A href="https://appnovation.com">appnovation.com</A></ProjectsTxt>
      <Title>Projects</Title>
      <SubTitle><span>examples of my recent work:</span></SubTitle>
    </Container>

  );
}

export default Projects;
