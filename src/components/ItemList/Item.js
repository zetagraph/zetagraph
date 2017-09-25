import styled from 'styled-components';
import { media } from '../Style-utils';

const Item = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 33.3333%;
  padding: 1.5em 1em;
  font-size: 1.2rem;
  font-weight: 700;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  ${media.tablet`
    font-size: 1.6rem;
    min-height: 250px;

    &:nth-child(3),
    &:nth-child(6) {
      border-right: none;
    }

    &:nth-child(n+4) {
      border-bottom: none;
    }


  `}
`;

export default Item;
