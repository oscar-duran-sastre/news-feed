import getNews from "./read/getNews";
import getNew from "./read/getNew";

const news = (app) => {
  app.get("/news", getNews);
  app.get("/news/:_id", getNew);
};

export default news;
