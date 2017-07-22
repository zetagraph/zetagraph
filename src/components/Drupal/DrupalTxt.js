import styled from 'styled-components';
import { media } from '../Style-utils';

const DrupalTxt = styled.div`
  max-width: 90%;
  margin: 0 auto 1em auto;
  font-size: 1.5rem;
  font-weight: 100;
  color: #333;

  span {
    font-weight: 400;
  }

  ${media.tablet`
    max-width: 60%;
    font-size: 2rem;
  `}
`;

export default DrupalTxt;
