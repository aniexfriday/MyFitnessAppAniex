import React from 'react'
import SectionHead from './sectionHead/SectionHead';
import { FaQuestion } from 'react-icons/fa';
import { faqs } from '../data';
import FAQ from './FAQ';

const FAQs = () => {
  return (
    <section className="faqs">
        <div className="container faqs__container">
            <SectionHead icon={<FaQuestion/>} title='FAQs'/>
            <div className="faqs__wrapper">
                {
                    faqs.map((faq) => {
                        return(
                            <FAQ key={faq.id} question={faq.question} answer={faq.answer}/>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default FAQs;