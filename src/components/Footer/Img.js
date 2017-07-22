import styled from 'styled-components';

const Img = styled.img`
  display: inline-block;
  width: 40px;
  margin: 0 20px;
  vertical-align:bottom;
  transition: 0.5s;

  &:hover {
    opacity: 0.25;
  }
`;

export default Img;
