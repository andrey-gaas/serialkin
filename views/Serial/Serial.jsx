import PropTypes from 'prop-types';
import { Container, Breadcrumbs } from '../../components';
import { Header } from './components';

function Serial({ breadcrumbs }) {
  return (
    <Container>
      <Breadcrumbs data={breadcrumbs} />
      <Header />
    </Container>
  );
}

Serial.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
};

export default Serial;
