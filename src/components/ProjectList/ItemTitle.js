import styled from 'styled-components';
import { media } from '../Style-utils';

const ItemTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 0.2em;
  font-weight: 700;
  color: #333;
  ${media.tablet`
    font-size: 2.4rem;
  `}
`;

export default ItemTitle;
