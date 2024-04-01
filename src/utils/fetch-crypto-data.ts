export const fetchCryptoData = async (setPrices: any) => {
  try {
    const response = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    const data = await response.json();
    setPrices(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
