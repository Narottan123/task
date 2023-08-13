import React, { useState } from "react";
import axios from "axios";
const Contact = () => {
  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    try {
      await axios.post("/api/data", data); //send data into backend endpoint
      console.log("Form data sent to the server");
    } catch (error) {
      console.error("Error sending form data:", error);
    }
    alert("Data submitted successfully");
    setData({
      fullName: "",
      phone: "",
      email: "",
      message: "",
    });
  };
  return (
    <>
      <h1 className="heading">Contact Us</h1>
      <form className="form" onSubmit={formSubmit}>
        <div>
          <div className="form-group">
            <label htmlFor="name" className="label">
              Name:
            </label>
            <input
              type="text"
              className="form-control input"
              id="name"
              name="fullName"
              value={data.fullName}
              onChange={inputEvent}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile" className="label">
              Mobile Number:
            </label>
            <input
              type="tel"
              className="form-control input"
              id="mobile"
              name="phone"
              value={data.phone}
              onChange={inputEvent}
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="label">
              Email:
            </label>
            <input
              type="email"
              className="form-control input"
              id="email"
              name="email"
              value={data.email}
              onChange={inputEvent}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="label">
              Message:
            </label>
            <textarea
              className="form-control input"
              id="message"
              rows={4}
              name="message"
              value={data.message}
              onChange={inputEvent}
              placeholder="Enter your message"
              required
              defaultValue={""}
            />
          </div>
          <button type="submit" className="btn btn-primary button">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;
