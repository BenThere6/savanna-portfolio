import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="content">
        {children} {/* This will render the main content of each page */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
