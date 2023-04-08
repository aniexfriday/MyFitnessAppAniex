import React from 'react';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_5.jpg';
import { trainers } from '../../data';
import Trainer from '../../components/Trainer';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import Trainer1 from '../../images/trainer1.jpg'
import Trainer2 from '../../images/trainer2.jpg'
import Trainer3 from '../../images/trainer3.jpg'
import Trainer4 from '../../images/trainer4.jpg'
import Trainer5 from '../../images/trainer5.jpg'
import Trainer6 from '../../images/trainer6.jpg'
import './trainers.css';
const ourTrainers = [Trainer1, Trainer2, Trainer3, Trainer4, Trainer5, Trainer6]

const Trainers = () => {
  return (
    <>
      <Header title='Our Trainers' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic blanditiis ab qui non!
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {
            trainers.map((trainer, index) => {
              return(
                <Trainer key={trainer.id} image={ourTrainers[index]} name={trainer.name} job={trainer.job} socials={
                  [
                    {icon: <BsInstagram/>, link: trainer.socials[0]},
                    {icon: <AiOutlineTwitter/>, link: trainer.socials[1]},
                    {icon: <FaFacebookF/>, link: trainer.socials[2]},
                    {icon: <FaLinkedinIn/>, link: trainer.socials[3]}
                  ]
                }/>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Trainers;