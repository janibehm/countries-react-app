import { createSlice } from '@reduxjs/toolkit';
import weatherAPI from '../../services/weather';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weatherData: null,
    isLoading: true,
  },
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setWeatherData(state, action) {
      state.weatherData = action.payload;
    },
  },
});

export const { setIsLoading, setWeatherData } = weatherSlice.actions;

export const initializeWeather = (country) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      const weatherData = await weatherAPI.getCurrent(country);
      dispatch(setWeatherData(weatherData));
      dispatch(setIsLoading(false));
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
};

export default weatherSlice.reducer;
