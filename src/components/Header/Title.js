import styled from 'styled-components';
import { media } from '../Style-utils';

const Title = styled.h1`
  margin: 0 0 0.2em;
  font-weight: 700;
  font-size: 3rem;
  line-height: 1;
  ${media.tablet`
    font-size: 3rem;
  `}
`;

export default Title;
