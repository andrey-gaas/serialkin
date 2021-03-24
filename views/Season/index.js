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
      title: `Сезон ${season.season}`,
      link: `/serial/${serial.link}/${season.season}?seria=${seria}`,
    },
  ];

  return <SeasonComponent breadcrumbs={breadcrumbs} series={series} seria={seria} {...rest} />;
}

Season.propTypes = {
  serial: PropTypes.object.isRequired,
  season: PropTypes.object.isRequired,
  series: PropTypes.array.isRequired,
  seria:  PropTypes.string.isRequired,
};

export default Season;
