import React, { useState } from 'react';
import './ratingContainer.css';
import RatingButton from '../RatingButton/RatingButton';
import ThankYou from '../ThankYou/ThankYou';

import star from '../../assets/images/icon-star.svg';

const RatingContainer = () => {

  const [rating, setRating] = useState(false);
  const [rateNum, setRateNum] = useState(0);

  const onClick = (e) => {
    setRateNum(e.target.value);
  }

  return (
    <>
    <div className='content'>
        <div className='rating-logo'>
            <img src={star} alt="rating star" />
        </div>
        <h2>How did we do?</h2>
        <p>Please let us know how we did with your support request. All feedback is appreciate to help us improve our offering!</p>
        <div className='rating-btns'>
            <RatingButton rateNumber={1} onClick = {onClick}/>
            <RatingButton rateNumber={2} onClick = {onClick}/>
            <RatingButton rateNumber={3} onClick = {onClick}/>
            <RatingButton rateNumber={4} onClick = {onClick}/>
            <RatingButton rateNumber={5} onClick = {onClick}/>
        </div>
        <button className='submit-btn' type='button' onClick={() => {setRating(true)}}>submit</button>
    </div>
    { rating && <ThankYou setRating={setRating} rateNum={rateNum}/>}
    </>
  )
}

export default RatingContainer