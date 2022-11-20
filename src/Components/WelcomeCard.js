import React from 'react';
import pose from'./Resources/POSE_02.png';
import logoIcon from "./Resources/Group 1244.png"
import continueIcon from "./Resources/Group 1245.png"
import "./WelcomeCard.css"

function WelcomeCard() {
  return (
    <div className='welcomeCard__top'>
    <div className='welcomeCard'>
        <img src={logoIcon} alt="logo__img" className='logoIcon'/>
            <p className='welcomeCard__welcomeText'>Welcome back!</p>
            <p className='welcomeCard__signInText'>Sign In to find opportunities that match your interests. We have both part-time and full-time roles that can be done online and in-person.</p>
            <p className='welcomeCard__contactText'>Please contact us at +91-9380644532 if you need any assistance.</p>
            <img src={pose} alt="pose__img" className='poseImg'/>
            
            <img src={continueIcon} alt="continueICon" className='continueIcon'/>
    </div>
    </div>
  )
}

export default WelcomeCard