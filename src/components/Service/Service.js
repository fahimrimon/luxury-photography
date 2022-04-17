import React from "react";
import "./Service.css";
const Service = (props) => {
  const { name, img, price, photo, place, duration, edit, deliver, description, extra } = props.service;
  return (
    <div className="service">
      <img className="w-100" src={img} alt="" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <hr />
      <p>Place: {place}</p>
      <p>Duration: {duration}</p>
      <p>Number of Photos: {photo}</p>
      <p>Print: 4R Matte Print: {edit}</p>
      <p>*{deliver}</p>
      <p>Extra Hour: {extra}</p>
      <p>*{description}</p>
      <button className="btn btn-primary">Book Now</button>
    </div>
  );
};

export default Service;
