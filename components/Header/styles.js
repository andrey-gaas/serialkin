import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 30px;
  background: url('/images/backgrounds/header.png') top center repeat-x #2a3e52;
  z-index: 999999;
`;

export const Title = styled.a`
  font-family: "Exo 2";
  font-size: 30px;
  line-height: 30px;
  text-decoration: none;
  color: #fff;
`;

export const Logo = styled.div`
  margin-left: 10px;
  margin-top: 3px;
  width: 50px;
  height: 50px;
  background-image: url('/images/logo.png');
  background-size: 50px;
`;

export const Subtitle = styled.span`
  margin-left: 14px;
  font-size: 24px;
  line-height: 24px;
  color: #fff;
  text-transform: uppercase;
`;

export const Grow = styled.div`
  flex-grow: 1;
`;
