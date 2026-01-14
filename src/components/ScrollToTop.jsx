import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../config/analytics';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Track page view for Google Analytics
        trackPageView(pathname);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
