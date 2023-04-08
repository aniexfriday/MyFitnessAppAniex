import React from 'react'
import { FaCrown } from 'react-icons/fa'
import SectionHead from './sectionHead/SectionHead';
import { SiOpenaigym } from 'react-icons/si'
import { programs } from '../data'
import Card from '../UI/Card';
import { Link } from 'react-router-dom';
import { AiFillCaretRight } from 'react-icons/ai'

const Programs = () => {
  return (
    <section className="programs">
        <div className="container programs__container">
            <SectionHead icon={<FaCrown/>} title='Programs'/>        
            <div className="programs__wrapper">
                {programs.map((program, index) => {
                    return (
                        <Card className="programs__program" key={program.id}>
                            <span>{<SiOpenaigym/>}</span>
                            <h4>{program.title}</h4>
                            <small>{program.info}</small>
                            <Link to={program.path} className='btn sm'>Learn More <AiFillCaretRight/> </Link>
                        </Card>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Programs;