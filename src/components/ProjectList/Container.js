import styled from 'styled-components';
import { media } from '../Style-utils';

const Container = styled.div`
  ${media.tablet`
    display: flex;
    flex-wrap: wrap;
  `}
`;

export default Container;
