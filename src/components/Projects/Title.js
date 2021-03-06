import styled from 'styled-components';
import { media } from '../Style-utils';

const Title = styled.h1`
  margin: 0 0 0.5em;
  font-size: 2.5rem;
  ${media.tablet`
    font-size: 3rem;
  `}
`;

export default Title;
