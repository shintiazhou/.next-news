import { baseURL, headers } from "./config";

export async function getProductsByCategory() {
  const categories = ["cat140006", "cat150006", "cat130044", "cat160006"];
  const products = Promise.all(
    categories.map(async (categoryId) => {
      const data = await fetch(
        baseURL +
          `products/list?categoryId=${categoryId}&pageSize=10&currentPage=1&sortBy=P_BEST_SELLING%3A1`,
        {
          method: "GET",
          headers: headers,
        }
      );
      const product = await data.json();
      return product;
    })
  );
  return products;
}
