import dbConnect from '../../../db/connect';
import Serial from '../../../db/models/serial';

export default async function handler(req, res) {
  const {
    method,
    query,
  } = req;

  await dbConnect();

  switch(method) {
    case 'GET':
      try {
        const serial = await Serial.findOne({ link: query.serial });
        res.status(200).json({ success: true, data: serial });
      } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
