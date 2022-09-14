import React from 'react';
import About from '../About';
import Nav from '../Nav';

export default function HomePage() {
  return (
    <>
    <div className='App bg-emerald-50'>
    <main>
     <Nav/>
      <About/>
    </main>
    </div>
    </>
  );
}
