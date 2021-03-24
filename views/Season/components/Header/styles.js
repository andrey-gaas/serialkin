import styled from 'styled-components';
import { LIGHT_PRIMARY_COLOR } from '../../../../constants/styles';

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 20px;
  color: #fff;
  background-color: ${LIGHT_PRIMARY_COLOR};
  border-bottom: 1px solid #000;
`;
