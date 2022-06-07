import { FC } from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.div`
  h1 {
    text-align: center;
    font-size: 64px;
    line-height: 78px;
    margin: 0;
    padding: 40px 0 40px 0;
  }
`;

const Header: FC = () => {
  return (
    <HeaderStyle>
      <h1>ONLY.</h1>
    </HeaderStyle>
  );
};

export default Header;
