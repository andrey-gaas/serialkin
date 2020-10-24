import PropTypes from 'prop-types';
import ContainerComponent from './Container';

function Container({ children }) {
  return (
    <ContainerComponent>
      {children}
    </ContainerComponent>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
