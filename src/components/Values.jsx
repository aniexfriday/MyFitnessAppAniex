import React from 'react';
import Image from '../images/values.jpg';
import SectionHead from './sectionHead/SectionHead';
import { GiCutDiamond } from 'react-icons/gi';
import { SiOpenaigym } from 'react-icons/si';
import Card from '../UI/Card';
import { values } from '../data';

const Values = () => {
  return (
    <section className="values">
        <div className="container values__container">
            <div className="values__left">
                <div className="values__image">
                    <img src={Image} alt="values image" />
                </div>
            </div>
            <div className="values__right">
                <SectionHead icon={<GiCutDiamond/>} title='values'/>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, deleniti.
                </p>
                <div className="values__wrapper">
                    {values.map((value, index) => {
                        return(
                            <Card className='values__value'>
                                <span><SiOpenaigym/></span>
                                <h4>{value.title}</h4>
                                <small>{value.desc}</small>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values;