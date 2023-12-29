import { Outlet } from 'react-router-dom';
import './Layout.scss';
import { Suspense } from 'react';
import { ByMe, Nav, SocialMedia } from '../';

export const Layout: React.FC = () => {
  return (
    <>
      <header className="header">
        <Nav />
      </header>
      <main className="main">
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <footer className="footer">
        <SocialMedia />
        <ByMe />
      </footer>
    </>
  );
};
