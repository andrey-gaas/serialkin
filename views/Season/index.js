import { useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import SeasonComponent from './Season';

function Season({ serial, season, series, seria, ...rest }) {
  const [seriaNumber, setSeria] = useState(seria);
  const router = useRouter();
  const breadcrumbs = [
    {
      title: 'Главная',
      link: '/',
    },
    {
      title: serial.title,
      link: `/serial/${serial.link}`,
    },
    {
      title: `Сезон ${season.season}`,
      link: `/serial/${serial.link}/${season.season}?seria=${seria}`,
    },
  ];

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
  const activeSeria = series.find(seria => seria.number === +seriaNumber);

  const switchSeria = seria => {
    setSeria(seria);
    
    router.push({
      pathname: getPath(router.asPath),
      query: { seria },
    });
  };

  return (
    <SeasonComponent
      breadcrumbs={breadcrumbs}
      series={series}
      seria={activeSeria}
      switchSeria={switchSeria}
      {...rest}
    />
  );
}

Season.propTypes = {
  serial: PropTypes.object.isRequired,
  season: PropTypes.object.isRequired,
  series: PropTypes.array.isRequired,
  seria:  PropTypes.string.isRequired,
};

export default Season;
