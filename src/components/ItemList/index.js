import React from 'react';

import Container from './Container';
import Item from './Item';


function ItemList() {
  return (

    <Container>
      <Item>Discovery and <br />Prototyping</Item>
      <Item>UI Design</Item>
      <Item>Responsive <br /> Theming</Item>
      <Item>HTML5, CSS, <br /> JavaScript</Item>
      <Item>Agile <br /> Development</Item>
      <Item>Version <br /> Control</Item>
    </Container>

  );
}

export default ItemList;
