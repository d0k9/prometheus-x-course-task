import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page404 from '../images/404.png';

const NoPage = () => {
  return (
    <div>
      <Header />
      <img src={Page404} alt="Ooops. Something went wrong" width="100%" height="100%" />
      <Footer />
    </div>
  );
};

export default NoPage;