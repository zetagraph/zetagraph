import styled from 'styled-components';
import { media } from '../Style-utils';

const ItemDescription = styled.div`
  font-size: 1.2rem;
  font-weight: 300;

  span {
    font-weight: 500;
  }

  ${media.tablet`
   font-size: 1.4rem;
  `}
`;

export default ItemDescription;
