import PropTypes from 'prop-types';
import ContainerComponent from './Container';

function Container({ children, withoutMargin }) {
  return <ContainerComponent withoutMargin={withoutMargin} children={children} />;
}

Container.propTypes = {
  withoutMargin: PropTypes.bool,
};

Container.defaultProps = {
  withoutMargin: false,
};

export default Container;
