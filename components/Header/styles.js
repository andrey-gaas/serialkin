import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 30px;
  background: url('/images/backgrounds/header.png') top center repeat-x #2a3e52;
  z-index: 999999;

  @media (max-width: 989px) {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }
`;

export const MobileMenuButton = styled.button`
  margin-top: 3px;
  background: none;
  box-shadow: none;
  border: none;
  outline: none;
  color: #fff;

  &:active {
    box-shadow: none;
    color: #6c98c3;
  }

  @media (min-width: 990px) {
    display: none;
  }
`;

export const Title = styled.a`
  font-family: "Exo 2";
  font-size: 30px;
  line-height: 30px;
  text-decoration: none;
  color: #fff;

  @media (max-width: 990px) {
    margin-left: 15px;
  }
`;

export const Logo = styled.div`
  margin-left: 10px;
  margin-top: 3px;
  width: 50px;
  height: 50px;
  background-image: url('/images/logo.png');
  background-size: 50px;

  @media (max-width: 989px) {
    display: none;
  }
`;

export const Subtitle = styled.span`
  margin-left: 14px;
  font-size: 24px;
  line-height: 24px;
  color: #fff;
  text-transform: uppercase;

  @media (max-width: 989px) {
    display: none;
  }
`;

export const Grow = styled.div`
  flex-grow: 1;
`;
