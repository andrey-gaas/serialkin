import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { spinner } from 'react-icons-kit/fa/spinner';
import { Root } from './styles';

function Loader({ size }) {
  return (
    <Root>
      <Icon icon={spinner} size={size} />
    </Root>
  );
}

Loader.propTypes = {
  size: PropTypes.number,
};

Loader.defaultProps = {
  size: 20,
};

export default Loader;
