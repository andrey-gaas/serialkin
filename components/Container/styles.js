import styled from 'styled-components';

export const Root = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1280px) {
    max-width: 1280px;
  }

  @media (min-width: 600px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;
