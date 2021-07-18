import PropTypes from 'prop-types';
import { Container, Breadcrumbs } from '../../components';
import { Header, Seasons, SeeAlso } from './components';
import { Grid } from './styles';

function Serial({ breadcrumbs, serial, seasons, seeAlso }) {

  return (
    <Container>
      <Breadcrumbs data={breadcrumbs} />
      <Header title={serial.title} image={serial.poster} />
      <Grid>
        <Seasons seasons={seasons} />
        <SeeAlso list={seeAlso} />
      </Grid>
    </Container>
  );
}

Serial.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
  serial:      PropTypes.object.isRequired,
  seasons:     PropTypes.array.isRequired,
};

export default Serial;
