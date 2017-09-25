import styled from 'styled-components';
import { media } from '../Style-utils';

const DrupalTxt = styled.div`
  max-width: 90%;
  margin: 0 auto 1em;
  font-size: 1.4rem;
  font-weight: 100;

  span {
    font-weight: 400;
  }

  ${media.tablet`
    max-width: 60%;
    font-size: 1.6rem;
  `}
`;

export default DrupalTxt;
