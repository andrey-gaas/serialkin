import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MD } from '../../constants/media';

const StyledContainer = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #ededed;
  height: 100%;
`;

function Container({ children }) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
