import React from 'react';
import HeaderImage from '../../images/header_bg_2.jpg';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import './contact.css';
import Header from '../../components/Header';

const Contact = () => {
  return (
    <>
      <Header title='Get In Touch' image={HeaderImage}> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi, vitae nisi quo placeat iste?
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:nsikakakpan007@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
            <a href="http://m.me/engrnsikak.akpan.14" target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
            <a href="https://wa.me/+2347014486708" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact;