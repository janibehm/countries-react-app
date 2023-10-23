import React from 'react';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={`${styles.background} py-5`}>
      <h1>Countries App</h1>
      <p className='lead'>
        A simple React application made in Business College Helsinki lessons.
      </p>
      <div>
        <p className='mb-0'>
          App uses{' '}
          <a
            href='https://restcountries.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://restcountries.com/
          </a>{' '}
          and{' '}
          <a
            href='https://openweathermap.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://openweathermap.org/
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
