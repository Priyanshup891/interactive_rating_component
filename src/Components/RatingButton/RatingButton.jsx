import React, {useState} from 'react';

import './ratingButton.css';

const RatingButton = ({rateNumber, onClick}) => {


  return (
    <button value={rateNumber} className='rating-btn' onClick={onClick}>
      {rateNumber}
    </button>
  )
}

export default RatingButton;