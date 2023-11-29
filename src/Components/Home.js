import React from "react";
import BannerBackground from "../Assets/home_background_image.png";
import BannerImage from "../Assets/landing_image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Mediverve: Your Health, Our Technology
          </h1>
          <p className="primary-text">
          Empowering your health journey with advanced medical insights and care at your fingertips.
          </p>
          {/* <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button> */}
        </div>
        <div className="home-image-section rounded-3xl">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
