import dbConnect from '../../../db/connect';
import Serial from '../../../db/models/serial';

export default async function handler(req, res) {
  const { method, query } = req;

  await dbConnect();

  switch(method) {
    case 'GET':
      try {
        const serials = await Serial.find({ link: { $ne: query.serial } });
        res.status(200).json({ success: true, data: serials });
      } catch (error) {
        console.log(error.message);
        res.status(400).json({ success: false });
      }
      break;

    case 'POST':
      try {
        const serial = await Serial.create(req.body);
        res.status(201).json({ success: true, data: serial });
      } catch (error) {
        console.log(error.message);
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};