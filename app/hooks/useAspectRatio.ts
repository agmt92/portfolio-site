import { useEffect, useState } from 'react';

const useAspectRatio = () => {
  const [aspectRatio, setAspectRatio] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1280 ? 'slice' : 'meet';
    }
    return 'meet';
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateAspectRatio = () =>
      setAspectRatio(window.innerWidth >= 1280 ? 'slice' : 'meet');

    window.addEventListener('resize', updateAspectRatio);
    return () => window.removeEventListener('resize', updateAspectRatio);
  }, []);

  return aspectRatio;
};

export default useAspectRatio;