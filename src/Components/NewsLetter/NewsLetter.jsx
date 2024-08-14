import React from "react";
import "./NewLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Deals and New Arrivals</h1>
      <p>Subscribe to our Newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Enter Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
