import getClient from "../../mongo_client/index";
import { ObjectId } from "mongodb";

const getOneNews = async (req, res) => {
  const client = getClient();

  try {
    await client.connect();
    const database = client.db("news_feed");
    const collection = database.collection("news");

    const query = {};

    if (req.params) {
      query._id = new ObjectId(req.params._id);
    }

    const result = await collection.findOne(query);
    res.send(result);
  } catch (error) {
    console.error("ERROR: ", error);
    res.status(500);
    res.send({ error: "Fatal error" });
  } finally {
    client.close();
  }
};

export default getOneNews;
