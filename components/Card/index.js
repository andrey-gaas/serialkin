import PropTypes from 'prop-types';
import CardComponent from './Card';

function Card(props) {
  return (
    <CardComponent {...props} />
  );
}

export default Card;