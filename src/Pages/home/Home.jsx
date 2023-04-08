import React from 'react';
import MainHeader from '../../components/header/MainHeader';
import Programs from '../../components/Programs';
import Values from '../../components/Values';
import FAQs from '../../components/FAQs';
import './home.css';
import Testimonials from '../../components/Testimonials';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div>
      <MainHeader/>
      <Programs/>
      <Values/>
      <FAQs/>
      <Testimonials/>      
    </div>
  )
}

export default Home;