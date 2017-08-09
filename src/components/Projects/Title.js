import styled from 'styled-components';
import { media } from '../Style-utils';

const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  text-transform: uppercase;
  ${media.tablet`
    font-size: 3rem;
  `}
`;

export default Title;
