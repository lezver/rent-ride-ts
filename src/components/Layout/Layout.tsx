import { Outlet } from 'react-router-dom';
import './Layout.scss';
import { Suspense, useEffect, useState } from 'react';
import { ByMe, Nav, SocialMedia } from '../';
import { ScrollUp } from '../ScrollUp';

export const Layout: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () =>
      window.scrollY > 1000 ? setIsVisible(true) : setIsVisible(false)
    );
  }, []);
  return (
    <>
      <header className="header" id="scroll-up">
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
      {isVisible && <ScrollUp />}
    </>
  );
};
