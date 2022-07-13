const url = "https://api.coingecko.com/api/v3";

export const searchQuery = async (query) => {
  const resp = await fetch(`${url}/search?query=${query}`);
  const json = await resp.json();
  return json.coins;
};
