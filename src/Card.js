import React from 'react';
import './Card.css';

function Card() {
  return (
    <div className='body'>
      <div className='card'>
        <div className='card__left'>
            <div className='cardleft__heading'>
                <h1>Get  <span className='colored'>insights</span> that help your business grow.</h1>
            </div>
            <div className='cardleft__body'>
                <p>Descover the benefits of data analytics and make better decisions regarding revenue, customer experience and overall efficency. </p>
            </div>
            <div className='cardleft__stats'>
                <div className='stat'>
                    <h2>10K+</h2>
                    <p>Companies</p>
                </div>
                <div className='stat'>
                    <h2>314</h2>
                    <p>Templates</p>
                </div>
                <div className='stat'>
                    <h2>12M+</h2>
                    <p>Queries</p>
                </div>
            </div>
        </div>
        <div className='card__right'>
          <img src='/image-header-desktop.jpg' alt='Header' />
        </div>
      </div>
    </div>
  );
}

export default Card;
