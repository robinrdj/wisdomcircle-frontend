import React from 'react';
import "./UserCard.css";


function UserCard({firstName, lastName, email, mobileNo}) {
  return (
    <div className='userCard'>
        <h4>Name: <span className='userCard__text'>{firstName} {lastName}</span></h4>
        <h4>Email: <span className='userCard__text'>{email}</span></h4>
        <h4>Mobile No: <span className='userCard__text'>{mobileNo}</span></h4>
    </div>
  )
}

export default UserCard;