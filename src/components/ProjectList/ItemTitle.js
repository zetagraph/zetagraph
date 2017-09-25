import styled from 'styled-components';
import { media } from '../Style-utils';

const ItemTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
  font-weight: 700;
  transition: 0.5s;
  ${media.tablet`
    font-size: 2.4rem;
  `}
`;

export default ItemTitle;
