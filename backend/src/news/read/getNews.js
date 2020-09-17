import getClient from "./../../mongo_client/index";

const getNews = async (req, res) => {
  const client = getClient();

  try {
    await client.connect();
    const database = client.db("news_feed");
    const collection = database.collection("news");

    const query = { principal: true };

    const result = await collection.find(query).toArray();
    res.send(result);
  } catch (error) {
    console.error("ERROR: ", error);
    res.status(500);
    res.send({ error: "Fatal error" });
  } finally {
    client.close();
  }
};

export default getNews;
