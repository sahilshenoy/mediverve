import React from "react";
import AboutBackground from "../Assets/about_background.png";
import AboutBackgroundImage from "../Assets/about_us.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About Mediverve</p>
        <h1 className="primary-heading">
        Healthcare, Enhanced by AI
        </h1>
        <p className="primary-text">
        Mediverve leverages machine learning to translate your medical tests into actionable health insights. Our telemedicine platform connects you to healthcare professionals with ease, ensuring quality care at your convenience.
        </p>
        <h3 className="primary-heading">
        What's Next?
        </h3> 
        <p className="primary-text">
        Stay tuned for our intelligent chatbot and Machine Learning Based Multiple Disease Detection Model, designed to navigate you towards optimal health in emergency situations.
        </p>
        <div className="about-buttons-container">
          {/* <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
