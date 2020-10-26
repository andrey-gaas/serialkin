import PropTypes from 'prop-types';
import { Root } from './styles';

function Container({ children, withoutMargin }) {
  return (
    <Root withoutMargin={withoutMargin}>{children}</Root>
  );
}

Container.propTypes = {
  withoutMargin: PropTypes.bool.isRequired,
};

export default Container;
