import React from 'react';
import './ratingContainer.css';
import RatingButton from '../RatingButton/RatingButton';

import star from '../../assets/images/icon-star.svg';

const RatingContainer = () => {
  return (
    <div className='content'>
        <div className='rating-logo'>
            <img src={star} alt="rating star" />
        </div>
        <h2>How did we do?</h2>
        <p>Please let us know how we did with your support request. All feedback is appreciate to help us improve our offering!</p>
        <div className='rating-btns'>
            <RatingButton rateNumber={1}/>
            <RatingButton rateNumber={2}/>
            <RatingButton rateNumber={3}/>
            <RatingButton rateNumber={4}/>
            <RatingButton rateNumber={5}/>
        </div>
        <button className='submit-btn' type='button'>submit</button>
    </div>
  )
}

export default RatingContainer