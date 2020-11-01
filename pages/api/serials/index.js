const data = [
  {
    id: 0,
    title: 'Пацаны',
    linkTitle: 'the_boys',
    image: '/images/posters/the-boys.jpg',
    seasons: 2,
    yearFrom: 2018,
    yearTo: null,
    status: 'Идет',
  },
  {
    id: 1,
    title: 'Острые козырьки',
    linkTitle: 'peaky_blinders',
    image: '/images/posters/peaky_blinders.jpg',
    seasons: 7,
    yearFrom: 2013,
    yearTo: null,
    status: 'Идет',
  },
  {
    id: 2,
    title: 'Викинги',
    linkTitle: 'vikings',
    image: '/images/posters/vikings.jpg',
    seasons: 6,
    yearFrom: 2013,
    yearTo: null,
    status: 'Идет',
  },
];

export default function handler(req, res) {
  res.json(data);
}