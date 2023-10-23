import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, registerWithEmailAndPassword } from '../auth/firebase';
import styles from './register.module.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert('Please enter name');
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/countries');
  }, [user, loading]);

  return (
    <section className='vh-100 gradient-custom'>
      <div className='container py-5 h-100'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
            <div
              className='card bg-dark text-white'
              style={{ borderRadius: '1rem' }}
            >
              <div className='card-body p-5 text-center'>
                <div className='mb-md-5 mt-md-4 pb-5'>
                  <h2 className='fw-bold mb-2 text-uppercase'>Register</h2>
                  <div className='form-outline form-white mb-4'>
                    <input
                      type='text'
                      className={`form-control form-control-lg ${styles.input}`} // Use the appropriate class name for styling.
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder='Full Name'
                    />
                    <label className='form-label' for='typeNameX'>
                      Full Name
                    </label>
                  </div>
                  <div className='form-outline form-white mb-4'>
                    <input
                      type='email'
                      className={`form-control form-control-lg ${styles.input}`} // Use the appropriate class name for styling.
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='Email'
                    />
                    <label className='form-label' for='typeEmailX'>
                      Email
                    </label>
                  </div>
                  <div className='form-outline form-white mb-4'>
                    <input
                      type='password'
                      className={`form-control form-control-lg ${styles.input}`} // Use the appropriate class name for styling.
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='Password'
                    />
                    <label className='form-label' for='typePasswordX'>
                      Password
                    </label>
                  </div>
                  <Button
                    className={`btn btn-outline-light btn-lg px-5 ${styles.button}`} // Use the appropriate class name for styling.
                    onClick={register}
                  >
                    Register
                  </Button>
                </div>
                <div>
                  <p className='mb-0'>
                    Already have an account?{' '}
                    <Link
                      className={`text-white-50 fw-bold ${styles.link}`}
                      to='/login'
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
