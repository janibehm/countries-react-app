import React from 'react';
import WeatherIcon from './WeatherIcon';

const WeatherIconTest = () => {
  return (
    <div>
      <h2>Testing Weather Icons</h2>

      {/* Render specific icons with known icon names */}
      <div>
        <h3>Icon 01d</h3>
        <WeatherIcon iconName='01d' />
      </div>

      <div>
        <h3>Icon 02n</h3>
        <WeatherIcon iconName='02n' />
      </div>

      {/* Add more tests for other icons here as needed */}
    </div>
  );
};

export default WeatherIconTest;
