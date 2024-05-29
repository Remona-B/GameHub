import React from 'react';
import './Footer.css'; 
import {CiFacebook, CiInstagram, CiTwitter} from 'react-icons/ci'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h2>Contact Us</h2>
          <p>Demo Street</p>
          <p>Chennai, India</p>
          <p>Email: gamehub@gmail.com</p>
          <p>Phone: +91 9788998141</p>
        </div>
        <div className='footer-section'>
          <h2>Follow Us</h2>
          <p><a href="https://www.facebook.com/login.php" target="_blank">Facebook &nbsp; <CiFacebook size= "1.2rem"/></a></p>
          <p>Twitter &nbsp; <CiTwitter size= "1.2rem"/></p>
          <p>Instagram &nbsp; <CiInstagram size= "1.2rem" /></p>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2024 GameHub. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
