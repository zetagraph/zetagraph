import styled from 'styled-components';
import { media } from '../Style-utils';

const ProjectsTxt = styled.div`
  max-width: 90%;
  margin: 0 auto;
  font-size: 1.4rem;
  font-weight: 100;

  span {
    font-weight: 400;
  }

  &::after {
    display: block;
    margin: 1em auto 0;
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 16px 16px 0;
    border-color: #000 transparent;
  }

  ${media.tablet`
    max-width: 60%;
    font-size: 1.6rem;
  `}
`;

export default ProjectsTxt;
