import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import style from './countriesSingle.module.css';
import { Card, Col, ListGroup } from 'react-bootstrap';
import { initializeWeather } from '../features/weather/weatherSlice.js';
import weatherAPI from '../services/weather.js';
import WeatherIcon from './WeatherIcon';

const CountriesSingle = () => {
  const location = useLocation();
  const country = location.state.country;
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.weatherData);
  const isLoading = useSelector((state) => state.weather.isLoading);

  useEffect(() => {
    if (country && country.capital) {
      dispatch(initializeWeather(country));
    }
  }, [dispatch, country]);

  return (
    <div className={style.background}>
      <Col className='mt-5'>
        <Card className='h-100'>
          <div>
            <Card.Body className='d-flex flex-column'>
              <Card.Title>{country?.name?.common || 'N/A'}</Card.Title>
              <Card.Subtitle className='mb-5 text-muted'>
                {country?.capital || 'N/A'}
              </Card.Subtitle>

              {weatherData && (
                <div>
                  <h2>Weather</h2>
                  <p>
                    Temperature: {Math.floor(weatherData.main.temp - 273.15)} °C
                  </p>
                  <p>{weatherData.weather[0].main}</p>
                  <WeatherIcon iconName={weatherData.weather[0].icon} />
                </div>
              )}
            </Card.Body>
          </div>
        </Card>
      </Col>
    </div>
  );
};

export default CountriesSingle;
