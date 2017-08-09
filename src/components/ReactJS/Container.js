import styled from 'styled-components';
import { media } from '../Style-utils';

const Container = styled.div`
  padding: 1em 0;
  text-align: center;
  border-top: 1px solid #eee;
  background-color: #fafafa;

  ${media.tablet`
    padding: 0.75em 0;
  `}
`;

export default Container;
