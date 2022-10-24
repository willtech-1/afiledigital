import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import ReactWhatsapp from "react-whatsapp";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-scroll";
import data from "./homeSliderData";

const Home = () => {
  // state
  const [sliderData, setSliderData] = useState(data);
  const [index, setIndex] = React.useState(0);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > sliderData.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = sliderData.length - 1;
      }
      return index;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > sliderData.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section" id="home">
      <div className="section-center">
        {sliderData.map((data, dataIndex) => {
          const { id, image, name, title, quote, button } = data;

          let position = "nextSlide";
          if (dataIndex === index) {
            position = "activeSlide";
          }
          if (
            dataIndex === index - 1 ||
            (index === 0 && dataIndex === sliderData.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt="web site" className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <Link className="slider-btn" to="contact"
                smooth={true}
                duration={1000}>{button}</Link>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
      {/* whats icon */}
      <ReactWhatsapp
        number="+27 677827144"
        message="I want to choose a plan but I have an enquiry"
      >
        <IoLogoWhatsapp className="whatsapp-icon" />
      </ReactWhatsapp>
    </section>
  );
};

export default Home;
