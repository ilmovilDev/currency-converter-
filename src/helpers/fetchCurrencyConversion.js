import axios from 'axios';

export const fetchCurrencyConversion = async (codeFrom, codeTo) => {
  try {
    const response = await axios.get("https://api.freecurrencyapi.com/v1/latest", {
      params: {
        apikey: import.meta.env.VITE_API_KEY,
        base_currency: codeFrom,
        currencies: codeTo
      }
    });
    return response.data.data[codeTo];
  } catch (error) {
    throw new Error('No result for this pair');
  }
};
