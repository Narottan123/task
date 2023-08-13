import React from "react";
import Homeimg from "../img/home.jpg";
//import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="img-class">
        <img src={Homeimg} alt="homepage" />
        <div
          className="text-center"
          style={{
            padding: "30px",
            background: "white",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Empowering Innovation through <strong>Full-Stack Solutions</strong>
          </h1>
          <h3 style={{ fontSize: "18px", lineHeight: "1.6" }}>
            "Welcome to <strong>SimpleWeb Tech</strong>, where tech meets
            creativity for seamless full-stack solutions. Explore how we
            transform digital experiences, from front-end finesse to back-end
            excellence. Join us in shaping the future!"
          </h3>
        </div>
      </div>
    </>
  );
};

export default Home;
