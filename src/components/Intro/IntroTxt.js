import styled from 'styled-components';
import { media } from '../Style-utils';

const IntroTxt = styled.div`
  max-width: 90%;
  margin: 0 auto;
  font-size: 1.5rem;
  font-weight: 300;

  span {
    font-weight: 700;
  }

  ${media.tablet`
    max-width: 70%;
    font-size: 2.4rem;
  `}
`;

export default IntroTxt;
