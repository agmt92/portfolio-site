import React from 'react';

const shimmer = `
  before:absolute before:inset-0 before:-translate-x-full 
  before:animate-[shimmer_1.5s_infinite_forwards] 
  before:bg-gradient-to-r before:from-transparent 
  before:via-white/60 before:to-transparent
  before:rounded-lg before:shadow-lg
`;

const Loading = () => {
  const skeletonHeight = `${0.375 * 100}vw`;

  return (
    <div
      className={`${shimmer} relative w-full overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black rounded-lg`}
      style={{ height: skeletonHeight }}
    />
  );
};

export default Loading;