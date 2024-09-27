import React from 'react';
import pageOneImage from '../../assets/test.png';

const FirstPage = () => {
  return (
    <div className='h-full'>
     <main className='h-full w-full page-shadow p-5' style={{ backgroundColor: '#84b3c4' }}>
        <div className='z-10 font-primary'>
          You said you wanted a letter?
        </div>
        <div className='font-sacramento text-4xl text-white'>
          I'll give you a <span className='font-primary text-black'>BOOK</span> instead
        </div>
        <div className='z-0 h-full flex items-center justify-center'>
          <img className='transform -translate-y-40' src={pageOneImage} alt="First Pic together" />
        </div>
      </main>
    </div>
  );
};

export default FirstPage;