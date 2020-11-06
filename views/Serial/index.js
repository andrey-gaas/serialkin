import PropTypes from 'prop-types';
import SerialComponent from './Serial';

function Serial({ serial, ...rest }) {

  const breadcrumbs = [
    {
      title: 'Главная',
      link: '/',
    },
    {
      title: serial.title,
      link: `/serial/${serial.link}`,
    },
  ];

  return <SerialComponent breadcrumbs={breadcrumbs} {...rest} />;
}

Serial.propTypes = {
  serial: PropTypes.object.isRequired,
};

export default Serial;
