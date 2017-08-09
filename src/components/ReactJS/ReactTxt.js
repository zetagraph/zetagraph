import styled from 'styled-components';
import { media } from '../Style-utils';

const ReactTxt = styled.div`
  margin: 0 auto;
  padding: 0 1em;
  font-size: 0.9rem;
  color: #aaa;
  ${media.tablet`
    padding: 0;
  `}
`;

export default ReactTxt;
