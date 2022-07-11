import baseURL from "./config";

export async function getLatestNews() {
    const res = await fetch(baseURL + "&sortBy=popularity&pageSize=10");
    const data = await res.json();

    return data.articles;
}

