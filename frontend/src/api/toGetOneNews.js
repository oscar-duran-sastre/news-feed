import API_URL, { ENDPOINT_NEWS } from "./constants";

const toGetOneNews = async (id) => {
  const response = await fetch(API_URL + ENDPOINT_NEWS + "/" + id);
  if (response.ok) {
    console.log("La petición fue correcta");
    const jsonResponse = await response.json();
    return jsonResponse;
  } else {
    throw Error("Error en la petición por parte de la API.");
  }
  // console.error("ERROR: ", error);
};

export default toGetOneNews;
