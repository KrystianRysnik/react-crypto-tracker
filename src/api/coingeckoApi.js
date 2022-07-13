const url = "https://api.coingecko.com/api/v3";

export const searchQuery = async (query) => {
  const resp = await fetch(`${url}/search?query=${query}`);
  const json = await resp.json();
  return json.coins;
};

export const fetchDetails = async (id, vsCurrencies = "usd") => {
  const ids = typeof id === "string" ? id : id.join(",");
  const resp = await fetch(
    `${url}/simple/price?ids=${ids}&vs_currencies=${vsCurrencies}`
  );
  const json = resp.json();
  return json;
};
