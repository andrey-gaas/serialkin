import dbConnect from '../../../../db/connect';
import Seria from '../../../../db/models/seria';

export default async function handler(req, res) {
  const {
    method,
    query,
  } = req;

  await dbConnect();

  switch(method) {
    case 'GET':
      try {
        const series = await Seria.find({
          serialLink: query.serial,
          season: query.season
        });
        res.status(200).json({ success: true, data: series });
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
