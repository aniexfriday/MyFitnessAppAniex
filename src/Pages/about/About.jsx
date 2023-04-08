import React from 'react';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';
import './about.css';

const About = () => {
  return (
    <>
      <Header title='About Us' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Dolorum molestiae facere, quis porro nemo exercitationem! Ab repellendus reprehenderit quaerat impedit?
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt=" section image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Officiis quisquam, eum saepe dolorum veniam reiciendis nam 
              temporibus doloremque sit praesentium error aperiam exercitationem magni. 
              Aliquid eius aperiam recusandae libero vitae, repudiandae natus dignissimos.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Voluptatibus laboriosam quidem, nulla ducimus provident odit 
              consequatur mollitia saepe quae ipsum?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Corrupti adipisci quae officiis ut, necessitatibus voluptas?
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">          
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Officiis quisquam, eum saepe dolorum veniam reiciendis nam 
              temporibus doloremque sit praesentium error aperiam exercitationem magni. 
              Aliquid eius aperiam recusandae libero vitae, repudiandae natus dignissimos.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Voluptatibus laboriosam quidem, nulla ducimus provident odit 
              consequatur mollitia saepe quae ipsum?
            </p>            
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt=" vision image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt=" mission image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Officiis quisquam, eum saepe dolorum veniam reiciendis nam 
              temporibus doloremque sit praesentium error aperiam exercitationem magni. 
              Aliquid eius aperiam recusandae libero vitae, repudiandae natus dignissimos.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Voluptatibus laboriosam quidem, nulla ducimus provident odit 
              consequatur mollitia saepe quae ipsum?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Corrupti adipisci quae officiis ut, necessitatibus voluptas?
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;