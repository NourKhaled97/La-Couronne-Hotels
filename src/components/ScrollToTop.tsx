import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash === '') window.scrollTo(0, 0);
  }, [hash, pathname]);

  return null;
};

export default ScrollToTop;
