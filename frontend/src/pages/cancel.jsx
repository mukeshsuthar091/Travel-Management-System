import React, { useEffect, useState } from 'react'
import '../styles/success_cancle.css'
import cancleImg from '../assets/images/cancle.png'
import { useNavigate } from 'react-router-dom'

const Cancle = () => {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setFlag(true);
    }, 3000);
  }, [])
  
  if (flag) {
    navigate('/');
  }

  return (
    <div className='payment_Section'>
      <div className="content_cancle">

        <div className="circle">
          <div className='c1'>
            <div className="c2">
              <div className="c3">
                <div className="c4">
                  <div className="img-wrapper">
                    <img src={cancleImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="title">Payment failed</p>
      </div>
    </div>
  )
}

export default Cancle