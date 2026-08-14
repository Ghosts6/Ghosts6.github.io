import React, { Suspense, lazy } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';

const ParticlesBackground = lazy(() => import('./ParticlesBackground'));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen font-sans">
      <Suspense fallback={null}>
        <ParticlesBackground />
      </Suspense>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
