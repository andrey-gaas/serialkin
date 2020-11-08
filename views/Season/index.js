import PropTypes from 'prop-types';
import SeasonComponent from './Season';

function Season({ serial, season, series, seria, ...rest }) {

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
      title: `Сезон ${season}`,
      link: `/serial/${serial.link}`,
    },
  ];

  return <SeasonComponent breadcrumbs={breadcrumbs} series={series} seria={seria} {...rest} />;
}

Season.propTypes = {
  serial: PropTypes.object.isRequired,
  season: PropTypes.string.isRequired,
  series: PropTypes.array.isRequired,
  seria:  PropTypes.string.isRequired,
};

export default Season;
