import React, { Suspense, lazy, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/common/Layout';
import Home from './pages/Home';

const Projects = lazy(() => import('./pages/Projects'));

const RouteFallback: React.FC = () => (
  <div className="py-24 flex justify-center" role="status" aria-live="polite">
    <div className="loader-inner" aria-hidden="true" />
    <span className="sr-only">Loading page…</span>
  </div>
);

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Projects />
            </Suspense>
          }
        />
      </Routes>
    </Layout>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
