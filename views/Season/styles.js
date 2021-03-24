import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  & video {
    display: block;
    outline: none;
  }

  @media (min-width: 990px) {
    flex-direction: row;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;

  @media (min-width: 990px) {
    border: 1px solid #000;
  }
`;

export const SideContainerDesctop = styled.div`
  display: none;
  margin-left: 20px;
  width: 500px;
  max-height: 470px;
  border: 1px solid #000;

  @media (min-width: 990px) {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
  }
`;

export const BottomContainerMobile = styled.div`
  display: block;
  margin-top: 20px;

  @media (min-width: 990px) {
    display: none;
  }
`;
