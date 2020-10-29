import styled from 'styled-components';

export const Root = styled.div`
  margin-top: ${props => props.withoutMargin ? 0 : '20px'};
  margin-bottom: ${props => props.withoutMargin ? 0 : '20px'};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
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
