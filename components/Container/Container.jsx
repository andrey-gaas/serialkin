import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MD } from '../../constants/media';

const StyledContainer = styled.div`
  margin: 30px 15px;
  background: red;
  height: 100px;

  @media ${MD} {
    margin: 30px;
  }
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
