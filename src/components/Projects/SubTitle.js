import styled from 'styled-components';
import { media } from '../Style-utils';

const SubTitle = styled.div`
  font-size: 1rem;
  font-weight: 300;

  ${media.tablet`
    font-size: 1.2rem;
  `}

  span {
    display: inline-block;
    margin-bottom: 1em;
  }

  &:after {
    display: block;
    margin: 0 auto;
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 20px 20px 0 20px;
    border-color: #000000 transparent transparent transparent;
  }
`;

export default SubTitle;
