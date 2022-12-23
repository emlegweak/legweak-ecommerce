import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Contact</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus soluta eum, beatae est, provident fugiat praesentium commodi adipisci molestias tenetur quod quam ipsum ad vel aspernatur esse iste. Iure, sit?</span>
        </div>
        <div className="item">
           <h1>Contact</h1>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus soluta eum, beatae est, provident fugiat praesentium commodi adipisci molestias tenetur quod quam ipsum ad vel aspernatur esse iste. Iure, sit?</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">LEGWEAK APPAREL</span>
          <span className="copyright">©2022 Emily Armstrong. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="img/payment.png" alt="Payment options" />
        </div>
      </div>
    </div>
  )
}

export default Footer
