import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-scroll";
import servicesData from "./servicesData";

const Services = () => {
  const [services, setServices] = useState(servicesData);
  const [value, setValue] = useState(0);

  const { titleBtn, offersInfo, offers, title } = services[value];
  return (
    <section className="services-section" id="services">
      
        <h1 style={{textAlign: 'center', padding: '20px'}}>Our Services</h1>
     
      <div className="services-wrapper">
        <div className="titleBtn-container">
          {services.map((service, index) => {
            return (
              <button
                key={service.id}
                onClick={() => setValue(index)}
                className={`title-btn ${index === value && "active-titleBtn"}`}
              >
                {service.titleBtn}
              </button>
            );
          })}
        </div>
        <section className="services-info">
          <h4>{title}</h4>
          <h5>{titleBtn}</h5>
          <p className="servicesInfo">{offersInfo}</p>
          {offers.map((offer, index) => {
            return (
              <div key={index} className="services-desc">
                <FaAngleDoubleRight className="angle-icon" />
                <p>{offer}</p>
              </div>
            );
          })}
        </section>
        <div className="choose-plan">
            <Link to="contact"  smooth={true} duration={1000} className="choose-plan-btn">Choose Plan</Link>

          </div>
      </div>
    </section>
  );
};

export default Services;
