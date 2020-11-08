import { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Breadcrumbs } from '../../components';
import { Player } from './components';

function Season({ breadcrumbs, series, seria: seriaProps }) {
  const [seriaNumber, setSeria] = useState(seriaProps);

  const seria = series.find(seria => seria.number === +seriaNumber);

  return (
    <Container>
      <Breadcrumbs data={breadcrumbs} />
      <Player serial={seria.serial} url={seria.link} />
    </Container>
  );
}

Season.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
  series:      PropTypes.array.isRequired,
  seria:       PropTypes.string.isRequired,
};

export default Season;
