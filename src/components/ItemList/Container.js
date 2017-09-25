import styled from 'styled-components';
import { media } from '../Style-utils';

const Container = styled.div`
  ${media.tablet`
    display: flex;
    flex-wrap: wrap;
    padding: 4em;
  `}
`;

export default Container;
