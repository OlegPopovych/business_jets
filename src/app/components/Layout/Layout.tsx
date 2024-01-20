import React, { ReactNode } from 'react';
import './layout.scss';
import { Contacts } from '../Contacts/Contacts';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='layout'>
      <header className='layout__header'>
        <Link to={'/'} className='layout__logo'>
          user registry
        </Link>

        <img src={process.env.PUBLIC_URL + '/icon/plane.png'} alt='logo' />
      </header>

      <main className='layout__main'>{children}</main>

      <footer className='layout__footer'>
        <Contacts />
      </footer>
    </div>
  );
};
