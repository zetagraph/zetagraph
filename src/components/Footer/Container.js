import styled from 'styled-components';
import { media } from '../Style-utils';

const Container = styled.div`
  padding: 1em 0;
  text-align: center;

  ${media.tablet`
    padding: 2em 0;
  `}
`;

export default Container;
