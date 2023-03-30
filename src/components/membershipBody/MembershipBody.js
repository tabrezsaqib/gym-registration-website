import React from 'react';
import "./MembershipBody.css";

function MembershipBody() {
  return (
    <div className='membermain'>
        <div className='memberparent'>
            <div className='memberleft'>
            <h3 className='membtitle'>Gold Membership</h3>
                <ul className='membcontent'>
                <li><span className='listTitle'>Access to all gym facilities and equipment:</span> With the Gold Membership, you will have full access to our state-of-the-art equipment, including treadmills, stationary bikes, weight machines, and free weights.</li>
                <li><span className='listTitle'>Unlimited group fitness classes:</span> Join as many group fitness classes as you like, including yoga, Pilates, spinning, and more. Our certified instructors will motivate and challenge you to achieve your best.</li>
                <li><span className='listTitle'>Personal training sessions:</span> Our certified personal trainers will provide one-on-one attention and develop a personalized workout plan to help you reach your goals. You'll receive two personal training sessions per month as a Gold Member.</li>
                <li><span className='listTitle'>Amenities:</span> Enjoy our clean and comfortable changing rooms, towel service, hydration stations, and lockers. You'll also receive priority access to equipment and classes.</li>
                </ul>
            </div>
            <div className='memberright'>
            <h3 className='membtitle'>Standard Membership</h3>
            <ul className='membcontent'>
                <li><span className='listTitle'>Access to all gym facilities and equipment:</span> With the Standard Membership, you will have full access to our state-of-the-art equipment, including treadmills, stationary bikes, weight machines, and free weights.</li>
                <li><span className='listTitle'>Group fitness classes:</span> Join any of our group fitness classes, including yoga, Pilates, spinning, and more. Our certified instructors will motivate and challenge you to achieve your best.</li>
                <li><span className='listTitle'>Amenities:</span> Enjoy our clean and comfortable changing rooms, towel service, and hydration stations. You'll also have access to lockers for your convenience.</li>
            </ul>
            </div>
        </div>
  </div>
  )
}

export default MembershipBody