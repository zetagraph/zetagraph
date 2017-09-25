import styled from 'styled-components';
import { media } from '../Style-utils';

const Container = styled.div`
  padding: 3em 0 0;
  text-align: center;
  ${media.tablet`
    padding: 3em 0 2em;
  `}
`;

export default Container;
