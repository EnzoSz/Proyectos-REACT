const ENDPOINT_URL = "https://api.escuelajs.co/api/v1/products";

export const getProducts = async () => {
  try {
    console.log("hola");
    const response = await fetch(ENDPOINT_URL);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
