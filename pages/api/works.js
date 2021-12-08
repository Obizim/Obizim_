const works = [
  {
    id: 1,
    title: "Flaxo Bookstore",
    url: "https://flaxo-bookstore.vercel.app/",
    description: "A ecommerce bookstore site with add to cart functionalities"
  },
  {
    id: 2,
    title: "FilmMax",
    url: "https://filmmax.netlify.app/",
    description: "A movie site that displays trending movies and tv shows"
  },
  {
    id: 3,
    title: "Shoppies",
    url: "https://shoppies21.netlify.app/",
    description: "A movie awards nomination site, data from IMDB API"
  },
];

export default function WorksAPI(req, res) {
  res.status(200).json({ data: works });
}
