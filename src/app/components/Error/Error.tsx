import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';

import './error.scss';

export const Error = () => {
  const navigate = useNavigate();

  return (
    <div className='error'>
      <h1 className='error__message'>Sonethings went wrong</h1>
      <Button title='home page' handler={() => navigate('/')} />
    </div>
  );
};
