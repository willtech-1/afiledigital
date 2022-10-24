import React from "react";
import { projects } from "./projects";

const OurWork = () => {
  return (
    <div className="ourWork" id="ourWork">
      <div>
        <h1 style={{textAlign: 'center', padding: '20px'}}>Our Work</h1>
        <p className="ourWork-desc">Featured Projects</p>
      </div>
      <div className="ourWork-list">
        {projects.map((project) => {
          const { id, img, link } = project;

          return (
            <div className="border" key={id}>
              <div className="border-browser">
                <div className="border-circle"></div>
                <div className="border-circle"></div>
                <div className="border-circle"></div>
              </div>
              <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="web design" className="border-img" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurWork;
