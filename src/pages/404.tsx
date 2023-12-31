import * as React from 'react';

const NotFoundPage = () => {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
          <div className='drop-shadow-glow animate-flicker text-red-500' />
          <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;
