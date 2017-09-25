import styled from 'styled-components';
import { media } from '../Style-utils';

const ItemLink = styled.a`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 50%;
  padding: 2em;
  min-height: 180px;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  text-align: center;
  transition: 0.5s;
  text-decoration: none;
  color: #000;

  &:hover h2 {
    color: #ccc;
  }

  &:last-child {
    border-bottom: none;
  }

  ${media.tablet`
    font-size: 2rem;
    min-height: 250px;

    &:nth-child(2),
    &:nth-child(4) {
      border-right: none;
    }

    &:nth-child(n+3) {
      border-bottom: none;
    }

  `}
`;

export default ItemLink;
