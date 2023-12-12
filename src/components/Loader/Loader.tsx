import React from 'react';

function Loader() {
  return (
    <div className='flex justify-center items-center'>
      <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#36A57C]'></div>
    </div>
  );
}

export default Loader;
