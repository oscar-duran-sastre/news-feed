import API_URL, { ENDPOINT_NEWS } from "./constants";

const toGetNews = async () => {
  try {
    const response = await fetch(API_URL + ENDPOINT_NEWS);
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

export default toGetNews;
