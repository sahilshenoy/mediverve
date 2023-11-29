import React from "react";
// import PickMeals from "../Assets/pick-meals-image.png";
// import ChooseMeals from "../Assets/choose-image.png";
// import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      // image: PickMeals,
      title: "Input Your Health Data",
      text: "Enter your medical test values into our ML model to get instant, personalized health insights and predictions. Our AI-driven analysis makes understanding your health status straightforward and precise.",
      btext: "ML Model",
    },
    {
      // image: ChooseMeals,
      title: "Schedule a Consultation",
      text: "Access a network of healthcare professionals for telemedicine consultations with just a few clicks. Book virtual appointments at your convenience and receive expert care wherever you are. ",
      btext: "Book A Call",
    },
    {
      // image: DeliveryMeals,
      title: "Stay Tuned",
      text: "We're constantly innovating to bring you more features. Soon, you'll have access to an intelligent health chatbot and a hospital locator to help you find medical services quickly and efficiently.",
      btext: "Stay Tuned!",
    },
  ];
  const handleClick = () => {
    window.location.href = "http://43.204.143.50:5002/";
  };

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">What we do</h1>
        <p className="primary-text">
          Discover the simplicity and effectiveness of managing your health with
          Mediverve.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              {/* <img src={data.image} alt="" /> */}
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            <button className="secondary-button" onClick={handleClick}>
              {data.btext}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
