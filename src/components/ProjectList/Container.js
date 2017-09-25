import styled from 'styled-components';
import { media } from '../Style-utils';

const Container = styled.div`
  ${media.tablet`
    display: flex;
    flex-wrap: wrap;
    padding: 0 3em;
    margin-bottom: 3em;
  `}
`;

export default Container;
