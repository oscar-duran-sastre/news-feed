import getNews from "./read/getNews";
import getOneNews from "./read/getOneNews";

const news = (app) => {
  app.get("/news", getNews);
  app.get("/news/:_id", getOneNews);
};

export default news;
