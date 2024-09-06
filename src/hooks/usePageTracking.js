import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageview } from 'react-ga4';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageview(location.pathname + location.search);
  }, [location]);
};

export default usePageTracking;
