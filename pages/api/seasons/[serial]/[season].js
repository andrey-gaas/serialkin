import dbConnect from '../../../../db/connect';
import Season from '../../../../db/models/season';

export default async function handler(req, res) {
  const {
    method,
    query,
  } = req;

  await dbConnect();

  switch(method) {
    case 'GET':
      try {
        const season = await Season.findOne({
          serialLink: query.serial,
          season: query.season,
        });
        res.status(200).json({ success: true, data: season });
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
