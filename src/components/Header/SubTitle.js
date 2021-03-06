import styled from 'styled-components';
import { media } from '../Style-utils';

const SubTitle = styled.div`
  margin-bottom: 1em;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 1rem;
  ${media.tablet`
    font-size: 1.4rem;
  `}
`;

export default SubTitle;
