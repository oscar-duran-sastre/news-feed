import API_URL, { ENDPOINT_NEWS } from "./constants";

const toGetOneNews = async (id) => {
  try {
    const response = await fetch(API_URL + ENDPOINT_NEWS + "/" + id);
    if (response.ok) {
      console.log("La petición fue correcta");
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      console.log("Error en la petición por parte del la API", response.status);
    }
  } catch (error) {
    console.error("ERROR: ", error);
  }
};

export default toGetOneNews;
