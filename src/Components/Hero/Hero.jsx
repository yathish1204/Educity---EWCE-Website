import React from "react";
import "./Hero.css";
import dark_arrow from '../../Assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We ensure better Education for a better World</h1>
        <p>
          Our cutting-edge curriculam is designed to empower students with the
          knowledge , skills and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="btn">Explore More <img src={dark_arrow} alt='explore more' /></button>
      </div>
    </div>
  );
};

export default Hero;
