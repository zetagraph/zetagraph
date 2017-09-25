import styled from 'styled-components';
import { media } from '../Style-utils';

const ItemSubTitle = styled.div`
  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;
  ${media.tablet`
    font-size: 1.2rem;
  `}
`;

export default ItemSubTitle;
