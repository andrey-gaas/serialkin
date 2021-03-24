import PropTypes from 'prop-types';
import ListComponent from './List';

function List(props) {
  return (
    <ListComponent {...props} />
  );
}

List.propTypes = {
  series:      PropTypes.array.isRequired,
  active:      PropTypes.number.isRequired,
  switchSeria: PropTypes.func.isRequired,
};

export default List;
