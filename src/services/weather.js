import axios from 'axios';

const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

const weatherAPI = {
  getCurrent: async (country) => {
    const capital = country.capital;

    if (!capital) {
      throw new Error('Invalid country object');
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      capital
    )}&appid=${apiKey}`;

    try {
      const currentResponse = await axios.get(currentWeatherUrl);
      return currentResponse.data;
    } catch (error) {
      console.error('Error fetching current weather data:', error);
      throw error;
    }
  },
};

export default weatherAPI;
