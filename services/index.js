import baseURL from "./config";

export async function getLatestNews() {
    const res = await fetch(baseURL);
    const data = await res.json();

    return data.data;
}

