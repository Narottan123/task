import React from "react";
import Homeimg from "../img/home.jpg";

const About = () => {
  return (
    <div className="about-section">
      <div className="img-class">
        <img src={Homeimg} alt="aboutsection" />
        <div className="overlay-text">
          <h2>
            <strong>About Our Company</strong>
          </h2>
          <p>
            <strong>SimpleWeb Tech</strong> is your partner in creating
            straightforward digital solutions. Our focus is on streamlining the
            complexities of web development, delivering user-friendly
            experiences that resonate. With a commitment to simplicity, we
            combine innovative thinking with clean code to build effective
            websites and applications
          </p>
          <ul>
            <li>Mobile application development</li>
            <li>Location-based services</li>
            <li>Augmented Reality</li>
            <li>Audio Recognition</li>
            <li>Proximity Marketing</li>
            <li>Shopper Marketing</li>
          </ul>
          <p>
            We have continuously worked with multiple brands/companies by
            understanding their needs and building solutions to cater to
            specific requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
