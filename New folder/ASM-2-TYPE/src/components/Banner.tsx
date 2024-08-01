import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import anh1 from "../assets/background_1.webp";
import anh2 from "../assets/banner-3.png";
import anh3 from "../assets/background_2.webp";

const Banner = () => {
  const images = [anh1, anh2, anh3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="main-home"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="main-text">
        <h5>Winter Collection</h5>
        <h1>
          New Winter <br /> Collection 2024
        </h1>
        <p>There's Nothing like Trend</p>
        <Link to="/shop" className="main-btn a">
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Banner;
