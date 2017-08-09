import styled from 'styled-components';
import { media } from '../Style-utils';

const ItemSubTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 300;
  ${media.tablet`
    font-size: 1.6rem;
  `}
`;

export default ItemSubTitle;
