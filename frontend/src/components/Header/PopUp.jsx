import React from 'react'
import { Link } from 'react-router-dom'

const PopUp = ({setShowPupUp}) => {
  return (
    <div className='popup_Section'>
        <Link to={'/my-booking'} onClick={()=> setShowPupUp(false)}>My Booking</Link>
    </div>
  )
}

export default PopUp