import styled, { keyframes } from "styled-components";

const pulsate = keyframes`
  0% {
    opacity: 0.0;
  }
  50% {
    opacity: 1.0;
  }
  100% {
    opacity: 0.0;
  }
`;

const Img = styled.img`
  width: 12px;
  vertical-align: middle;
  display: inline-block;
  animation: ${pulsate} 2s linear infinite;
`;

export default Img;
