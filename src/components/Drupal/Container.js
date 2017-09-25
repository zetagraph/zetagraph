import styled from 'styled-components';
import { media } from '../Style-utils';

const Container = styled.div`
  padding: 2em 0;
  text-align: center;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  background: #fafafa;
  ${media.tablet`
    padding: 4em 0;
  `}
`;

export default Container;
