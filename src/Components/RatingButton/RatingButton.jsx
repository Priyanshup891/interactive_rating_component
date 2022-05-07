import React from 'react';

import './ratingButton.css';

const RatingButton = ({rateNumber}) => {
  return (
    <button className='rating-btn'>
      {rateNumber}
    </button>
  )
}

export default RatingButton