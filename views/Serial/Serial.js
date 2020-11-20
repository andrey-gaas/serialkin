import PropTypes from 'prop-types';
import { Container, Breadcrumbs } from '../../components';
import { Header, Seasons } from './components';

function Serial({ breadcrumbs, serial, seasons }) {
  return (
    <Container>
      <Breadcrumbs data={breadcrumbs} />
      <Header title={serial.title} image={serial.poster} />
      <Seasons seasons={seasons} />
    </Container>
  );
}

Serial.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
  serial:      PropTypes.object.isRequired,
  seasons:     PropTypes.array.isRequired,
};

export default Serial;
