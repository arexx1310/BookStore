import React from 'react';

const Header = ({ children }) => {
  return (
    <div className='flex justify-between items-center mb-8 pb-4 border-b border-gray-200'>
      {children}
    </div>
  );
};

export default Header;