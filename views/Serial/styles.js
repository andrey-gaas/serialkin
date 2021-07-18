import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (min-width: 990px) {
    flex-direction: row;
  }
`;
