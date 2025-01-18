import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_4.jpg';
import Card from '../../UI/Card';
import { plans } from '../../data';
import './plans.css';

const Plans = () => {
  const navigate = useNavigate();

  const handleChoosePlan = (planId) => {
    navigate('/payment', { state: { planId } });
  };

  return (
    <>
      <Header title='Membership Plans' image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo doloremque quasi accusamus quod sint numquam.
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {
            plans.map((plan) => {
              return (
                <Card key={plan.id} className='plan'>
                  <h3>{plan.name}</h3>
                  <small>{plan.desc}</small>
                  <h1>{`$${plan.price}`}</h1><h2>/mo</h2>
                  <h4>Features</h4>
                  {
                    plan.features.map((featur, index) => {
                      return (
                        <p key={index} className={!featur.available ? 'disabled' : ""}>{featur.feature}</p>
                      )
                    })
                  }
                  <button 
                    className='btn lg' 
                    onClick={() => handleChoosePlan(plan.id)}
                  >
                    Choose Plan
                  </button>
                </Card>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Plans;