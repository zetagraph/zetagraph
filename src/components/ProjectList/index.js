import React from 'react';

import Container from './Container';
import ItemLink from './ItemLink';
import ItemTitle from './ItemTitle';
import ItemSubTitle from './ItemSubTitle';
import ItemDescriprion from './ItemDescriprion';


function ProjectList() {
  return (

    <Container>
      <ItemLink href="https://www.advil.com">
        <ItemTitle>Advil</ItemTitle>
        <ItemSubTitle>Site Redesign</ItemSubTitle>
        <ItemDescriprion>Role: <span>Front End Lead</span></ItemDescriprion>
      </ItemLink>
      <ItemLink href="http://www.fisba.com">
        <ItemTitle>Fisba</ItemTitle>
        <ItemSubTitle>Site Redesign</ItemSubTitle>
        <ItemDescriprion>Role: <span>Front End Lead</span></ItemDescriprion>
      </ItemLink>
      <ItemLink href="http://www.fox.com">
        <ItemTitle>Fox</ItemTitle>
        <ItemSubTitle>Site Redesign</ItemSubTitle>
        <ItemDescriprion>Role: <span>Front End Lead</span></ItemDescriprion>
      </ItemLink>
      <ItemLink href="http://dev-zetagraph.pantheonsite.io">
        <ItemTitle>Monoset</ItemTitle>
        <ItemSubTitle>Free Drupal 8</ItemSubTitle>
        <ItemDescriprion><span>Theme</span></ItemDescriprion>
      </ItemLink>
    </Container>

  );
}

export default ProjectList;
