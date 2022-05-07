import React from 'react';
import './thankYou.css';

import thank from '../../assets/images/illustration-thank-you.svg';

const ThankYou = ({rateNum}) => {
  return (
    <div className='thankYou-content'>
        <img src={thank} alt="thank you" />
        <div>You selected out {rateNum} of 5</div>
        <h2>Thank you!</h2>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
  )
}

export default ThankYou;