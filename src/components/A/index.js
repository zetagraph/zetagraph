import styled from 'styled-components';

const A = styled.a`
  color: #000;
  text-decoration: none;
  transition: 0.5s;
  font-weight: 300;
  border-bottom: 1px solid #ccc;

  &:hover {
    border-bottom: 1px solid #666;
  }
`;

export default A;
