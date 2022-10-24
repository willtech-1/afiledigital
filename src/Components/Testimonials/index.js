import React, { useState } from "react";
import people from "./reviewsData";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
 

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  
  return (
    <main className="testimonial-main" id="testimonials">
      <section className="testimonial-container">
        
          <h1 style={{textAlign: 'center', padding: '20px'}}>Testimonials</h1>
        

        <div className="testimonial-review">
          <div className="testimonial-img-container">
            <div className="testimonial-img">{image}</div>
            <span className="testimonial-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="testimonial-author">{name}</h4>
          <p className="testimonial-job">{job}</p>
          <p className="testimonial-info">{text}</p>
          <div className="testimonial-button-container">
            <button className="testimonial-prev-btn" onClick={prevPerson}>
              <FaChevronLeft />
            </button>
            <button className="testimonial-next-btn" onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>
          
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
