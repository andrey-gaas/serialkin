import dbConnect from '../../db/connect';
import Serials from '../../db/models/serials';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch(method) {
    case 'GET':
      try {
        const serials = await Serials.find({});
        res.status(200).json({ success: true, data: serials });
      } catch (error) {
        console.log(error.message);
        res.status(400).json({ success: false });
      }
      break;

    case 'POST':
      try {
        const serial = await Serials.create(req.body);
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
