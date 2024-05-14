import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate weather",
    desc: "Stay informed about the latest weather conditions with our accurate forecasts. Whether it’s sunshine or rain, we’ve got you covered.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Discover the wonders of your destination with our knowledgeable tour guides. Experience the best attractions and hidden gems.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Tailor your travel experience to your preferences. From accommodation to activities, create your perfect itinerary.",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
