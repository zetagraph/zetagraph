import styled from 'styled-components';
import { media } from '../Style-utils';

const Container = styled.div`
  padding: 2em 1em;
  text-align: center;
  ${media.tablet`
    padding: 4em 0 3em 0;
  `}
`;

export default Container;
