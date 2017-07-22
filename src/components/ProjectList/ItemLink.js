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
  border-left: 1px solid #eee;
  border-bottom: 1px solid #eee;
  text-align: center;
  color: #333;
  transition: .5s;
  text-decoration: none;

  &:hover {
    background-color: #fafafa;
  }

  ${media.tablet`
    font-size: 2rem;
    min-height: 250px;
  `}
`;

export default ItemLink;
