import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";
const Service = (props) => {
  const { name, img, price, photo, place, duration, edit, deliver, description, extra } = props.service;
  const nevigate = useNavigate();

  const nevigateToCheckOut = () =>{
        nevigate('/checkout');
  }
  return (
    <div className="service">
      <img className="w-100" src={img} alt="" />
      <h2 style={{"margin-top":"10px"}}>{name}</h2>
      <p>Price: {price}</p>
      <hr />
      <p>Place: {place}</p>
      <hr className="zen" />
      <p>Duration: {duration}</p>
      <hr className="zen" />
      <p>Number of Photos: {photo}</p>
      <hr className="zen" />
      <p>Print: 4R Matte Print: {edit}</p>
      <hr className="zen" />
      <p>*{deliver}</p>
      <hr className="zen" />
      <p>Extra Hour: {extra}</p>
      <hr className="zen" />
      <p>*{description}</p>
      <button onClick={() => nevigateToCheckOut()} className="btn btn-primary">Check Out</button>
    </div>
  );
};

export default Service;
