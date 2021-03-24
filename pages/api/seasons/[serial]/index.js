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
        const seasons = await Season.find({ serialLink: query.serial });
        res.status(200).json({ success: true, data: seasons });
      } catch (error) {
        console.log(error.message);
        res.status(400).json({ success: false });
      }
      break;

    case 'POST':
      try {
        const season = await Season.create(req.body);
        res.status(201).json({ success: true, data: season });
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
