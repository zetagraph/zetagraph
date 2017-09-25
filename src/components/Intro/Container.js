import styled from 'styled-components';
import { media } from '../Style-utils';

const Container = styled.div`
  padding: 2em 0;
  text-align: center;
  background: #fafafa;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  ${media.tablet`
    padding: 5em 0;
  `}
`;

export default Container;
