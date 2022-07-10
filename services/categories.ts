import { baseURL, headers } from "./config";
import { ICategory } from "./../models/ICategory";
import { IProduct } from "../models/IProduct";

export async function getCategories() {
  const res = await fetch(baseURL + "categories/v2/list-root", {
    method: "GET",
    headers: headers,
  });
  const data = await res.json();

  return <ICategory[]>data.rootCategories;
}
