import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, loginWithEmailAndPassword } from '../auth/firebase';
import styles from './login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/countries');
  }, [user, loading]);

  return (
    <section className='gradient-custom'>
      <div className='container py-5 h-100'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
            <div
              className='card bg-dark text-white'
              style={{ borderRadius: '1rem' }}
            >
              <div className='card-body p-5 text-center'>
                <div className='mb-md-5 mt-md-4 pb-5'>
                  <h2 className='fw-bold mb-2 text-uppercase'>Login</h2>
                  <div className='form-outline form-white mb-4'>
                    <p className='text-white-50 mb-5'>
                      Please enter your login and password!
                    </p>
                    <div className='form-outline form-white mb-4'>
                      <input
                        type='email'
                        className={`form-control form-control-lg ${styles.input}`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id='typeEmailX'
                      />
                      <label className='form-label' htmlFor='typeEmailX'>
                        Email
                      </label>
                    </div>
                    <div className='form-outline form-white mb-4'>
                      <input
                        type='password'
                        className={`form-control form-control-lg ${styles.input}`}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id='typePasswordX'
                      />
                      <label className='form-label' htmlFor='typePasswordX'>
                        Password
                      </label>
                    </div>

                    <Button
                      className={`btn btn-outline-light btn-lg px-5 ${styles.button}`}
                      onClick={() => loginWithEmailAndPassword(email, password)}
                    >
                      Login
                    </Button>
                    <div className='d-flex justify-content-center text-center mt-4 pt-1'>
                      <a href='#!' className='text-white'>
                        <i className='fab fa-facebook-f fa-lg'></i>
                      </a>
                      <a href='#!' className='text-white'>
                        <i className='fab fa-twitter fa-lg mx-4 px-2'></i>
                      </a>
                      <a href='#!' className='text-white'>
                        <i className='fab fa-google fa-lg'></i>
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className='mb-0'>
                      Don't have an account?{' '}
                      <Link
                        className={`text-white-50 fw-bold ${styles.link}`}
                        to='/register'
                      >
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
