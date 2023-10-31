import axios from 'axios';

const baseUrl = {
  all: 'https://restcountries.com/v3.1/all',
};

const countriesAPI = {
  getAll: async () => {
    const request = axios.get(baseUrl.all);
    const response = await request;
    return response.data;
  },
};

export default countriesAPI;
