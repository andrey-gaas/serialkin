import PropTypes from 'prop-types';
import { Container, Breadcrumbs } from '../../components';
import { Header } from './components';

function Serial({ breadcrumbs, serial }) {
  return (
    <Container>
      <Breadcrumbs data={breadcrumbs} />
      <Header title={serial.title} image={serial.poster} />
    </Container>
  );
}

Serial.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
  serial:      PropTypes.object.isRequired,
};

export default Serial;
