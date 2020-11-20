import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Container, Breadcrumbs } from '../../components';
import { Player } from './components';

function Season({ breadcrumbs, series, seria: seriaProps }) {
  const [seriaNumber, setSeria] = useState(seriaProps);
  const router = useRouter();

  const getPath = path => {
    const index = path.indexOf('?');

    if (index === -1) {
      return path;
    }

    return path.slice(0, index);
  };

  if (router.query.seria === undefined && typeof window !== 'undefined') {
    router.push({
      pathname: getPath(router.asPath),
      query: { seria: 1 },
    });
  }

  const seria = series.find(seria => seria.number === +seriaNumber);

  const switchSeria = seria => {
    setSeria(seria);
    
    router.push({
      pathname: getPath(router.asPath),
      query: { seria },
    });
  };

  return (
    <Container>
      <Breadcrumbs data={breadcrumbs} />
      <Player
        serial={seria.serial}
        url={seria.link}
        series={series}
        switchSeria={switchSeria}
      />
    </Container>
  );
}

Season.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
  series:      PropTypes.array.isRequired,
  seria:       PropTypes.string.isRequired,
};

export default Season;
