import React from 'react';
import Header from './header';

const Layout = (props) => (
  <>
    <Header />
    <main>
      <div className='container'>{props.children}</div>
    </main>
    <style>{`
      * {
        font-family: sans-serif !important;
        outline: none;
      }
      .container {
        max-width: auto;
      }
    `}</style>
  </>
);

export default Layout;