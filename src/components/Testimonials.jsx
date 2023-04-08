import React, { useState } from 'react'
import SectionHead from './sectionHead/SectionHead';
import { ImQuotesLeft } from 'react-icons/im';
import Card from '../UI/Card';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { testimonials } from '../data';
import avatar1 from '../images/avatar1.jpg'
import avatar2 from '../images/avatar2.jpg'
import avatar3 from '../images/avatar3.jpg'
import avatar4 from '../images/avatar4.jpg'
import avatar5 from '../images/avatar5.jpg'
import avatar6 from '../images/avatar6.jpg'
import avatar7 from '../images/avatar7.jpg'

const images = [avatar1, avatar2, avatar3, avatar4, avatar5]

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const {name, quote, job} = testimonials[index];

    const nextTestimonialHandler = () => {
        setIndex(prev => prev + 1);
        if(index >= testimonials.length - 1){
            setIndex(0)
        }
    }

    const prevTestimonialHandler = () => {
        setIndex(prev => prev - 1)
        if(index <= 0){
            setIndex(testimonials.length - 1)
        }
    }

  return (
    <section className="testimonials">
        <div className="container testimonials__container">
            <SectionHead icon={<ImQuotesLeft/>} title='Testimonials' className="testimonials__head"/>
            <Card className='testimonial'>
                <div className="testimonial__avatar">                    
                    <img src={images[index]} alt="avatar"/>
                </div>
                <p className='testimonial__quote'>{`"${quote}"`}</p>
                <h5>{name}</h5>
                <small className="testimonial__title">{job}</small>
            </Card>
            <div className="testimonials__btn-container">
                <button className="testimonials__btn" onClick={prevTestimonialHandler}><IoIosArrowDropleftCircle/></button>
                <button className="testimonials__btn" onClick={nextTestimonialHandler}><IoIosArrowDroprightCircle/></button>
            </div>
        </div>
    </section>
  )
} 

export default Testimonials;