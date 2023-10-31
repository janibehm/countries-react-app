import { configureStore } from '@reduxjs/toolkit';
import countriesSlice from '../features/countries/countriesSlice';
import favouritesSlice from '../features/countries/favouritesSlice';
import weatherSlice from '../features/weather/weatherSlice';

export default configureStore({
  reducer: {
    countries: countriesSlice,
    favourites: favouritesSlice,
    weather: weatherSlice,
  },
});
