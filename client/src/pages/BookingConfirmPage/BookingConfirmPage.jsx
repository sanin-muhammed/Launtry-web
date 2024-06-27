import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const BookingConfirmPage = () => {
  return (
    <div className='booking_container'>
        <div>
            <img className='booking_img' src="./bookingImage.svg" alt="" />
            <h1>Your Booking is Confirmed</h1>
        </div>
        <a href="/home"className='button'>Back To home</a>
    </div>
  )
}

export default BookingConfirmPage