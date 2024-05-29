import React from 'react';
import './AboutUs.css'; 
import Contact from '../Components/Contact';

const AboutUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); 
    alert("Thanks for the message"); 

  };

  return (
    <div className="about-us-container">
      <div className="about-us-box">
        <header className="about-us-header">
          <h2>About Us</h2>
          <p>Get to know the team behind GameInfoHub and our mission.</p>
        </header>
        <section className="about-us-content">
          <div className="about-us-text">
            <p>
              Welcome to <strong>GameInfoHub</strong>! We are dedicated to bringing you the latest news, reviews, and in-depth guides for all your favorite games.
            </p>
            <p>
              Our team of passionate gamers works tirelessly to ensure you have access to the most accurate and up-to-date information in the gaming world. Whether you are looking for tips to improve your gameplay, the latest game releases, or comprehensive reviews, we've got you covered.
            </p>
            <p>
              Our mission is to create a community where gamers can find all the information they need in one place and share their experiences and knowledge with others.
            </p>
            <p>
              Contact us: <a href="gamehub@gmail.com">gamehub@gmail.com</a>
            </p>
          </div>
        </section>
      </div>
      <Contact/>
    </div>
  );
};

export default AboutUs;
