import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;  
}

const anotherFunction = async (urlApi) => {
  try {
    const products = await fetchData(`${urlApi}/products`);
    console.log(products);
    const product = await fetchData(`${API}/products/${products[0].id}`);
    console.log(product.title);
    const category = await fetchData(
      `${API}/categories/${product.category.id}`
    );
    console.log(category.name);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Finally");
  }
}

anotherFunction(API);