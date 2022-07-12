import { baseURL } from "./config";

export async function getNewsByCategory(category: string) {
  const res = await fetch(
    `${baseURL}&category=${category}&sortBy=popularity&pageSize=10`
  );
  const data = await res.json();

  return data.articles;
}
