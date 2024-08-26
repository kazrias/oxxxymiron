import { MAIN_URL } from "./constants";
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
export const request = async (query) => {
  try {
    const result = await fetch(MAIN_URL, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify({ query }),
    })
    const { data } = await result.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}