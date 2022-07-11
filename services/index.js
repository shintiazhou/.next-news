import baseURL from "./config";

export async function getLatestNews() {
    const res = await fetch(baseURL + "&limit=1");
    const data = await res.json();

    return data.data;
}

