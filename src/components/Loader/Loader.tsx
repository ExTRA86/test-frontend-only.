import { FC } from 'react';
import styled from 'styled-components';

const LoaderStyle = styled.div`
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px dashed #4b51ef;
  animation: rotate 1.7s infinite linear;
  animation-direction: alternate;

  @keyframes rotate {
    from {
      transform: rotate(0deg) scale(0.1);
    }
    to {
      transform: rotate(720deg) scale(1.2);
    }
  }
`;

const Loader: FC = () => {
  return <LoaderStyle></LoaderStyle>;
};

export default Loader;
