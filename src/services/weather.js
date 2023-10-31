import axios from 'axios';

const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

const weatherAPI = {
  getCurrent: async (country) => {
    const countryCopy = { ...country };
    const coutryCapital = countryCopy.capital;
    if (!country || !country.name || !country.capital) {
      throw new Error('Invalid country object or missing common name');
    }

    const baseUrl = {
      current: `https://api.openweathermap.org/data/2.5/weather?q=${coutryCapital}&appid=${apiKey}`,
    };

    const response = await axios.get(baseUrl.current);
    return response.data;
  },
};

export default weatherAPI;
