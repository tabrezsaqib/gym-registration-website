import React from 'react';
import "./SubscriptionBody.css";

function SubscriptionBody() {
  return (
    <div className='submain'>
        <div className='subparent'>
          <div className='subleft'>
            <h3 className='subtitle'>Annual Subscription</h3>
            <p className='subcontent'>The Annual Subscription requires a 12-month commitment and is paid upfront. With this option, you'll save money compared to the Bi-Weekly Subscription and have the peace of mind that your membership is secure for a full year.</p>
            <div className='subbutton'>
              <button className='buybutton'>Gold - $399.99</button>
              <button className='buybutton'>Standard - $299.99</button>
            </div>
          </div>
          <div className='subright'>
            <h3 className='subtitle'>Bi-weekly Subscription</h3>
            <p className='subcontent'>The Bi-Weekly Subscription requires no long-term commitment and is paid every two weeks. With this option, you'll have the flexibility to cancel or pause your membership at any time.</p>
            <div className='subbutton'>
              <button className='buybutton'>Gold - $29.99</button>
              <button className='buybutton'>Bi-weekly - $19.99</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SubscriptionBody