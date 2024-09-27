import React from 'react'


const ThirdPage = () => {
  return (
    <div className='h-full'>
      <main className='h-full page-shadow'>
        <div className='h-full p-10'>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/2TodE1TSiibIFWXFmoUelC?utm_source=generator"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </main>
    </div>
  );
};


export default ThirdPage