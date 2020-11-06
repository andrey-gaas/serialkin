import { serials } from '../../data/serials';

function Serial({ url }) {
  const serial = serials.find(serial => serial.link === url.query.serial);

  return (
    <h1>{serial.title}</h1>
  );
}

export default Serial;
