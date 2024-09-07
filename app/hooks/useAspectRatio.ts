import { useEffect, useState } from 'react';

const useAspectRatio = () => {
  const [aspectRatio, setAspectRatio] = useState(
    window.innerWidth >= 1280 ? 'slice' : 'meet'
  );

  useEffect(() => {
    const updateAspectRatio = () =>
      setAspectRatio(window.innerWidth >= 1280 ? 'slice' : 'meet');

    window.addEventListener('resize', updateAspectRatio);
    return () => window.removeEventListener('resize', updateAspectRatio);
  }, []);

  return aspectRatio;
};

export default useAspectRatio;