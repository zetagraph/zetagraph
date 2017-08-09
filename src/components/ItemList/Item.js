import styled from 'styled-components';
import { media } from '../Style-utils';

const Item = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 33.3333%;
  padding: 1.5em 1em;
  font-size: 1.8rem;
  font-weight: 100;
  border-left: 1px solid #eee;
  border-bottom: 1px solid #eee;
  ${media.tablet`
    font-size: 2rem;
    min-height: 250px;
  `}
`;

export default Item;
