import React from 'react'
import { Link } from 'react-router-dom';

// import Image from '../../images/main__header.png';
import im1 from '../../images/heady.png'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkout</h4>
          <h1>Join the legends of the fitness world</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Vero ratione delectus blanditiis, enim itaque architecto!
          </p>
          <Link to='/plans' className='btn lg'>Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={im1} alt="header image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader;