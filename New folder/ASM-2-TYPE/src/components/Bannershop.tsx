import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import anh2 from "../assets/background_3.webp";
import anh3 from "../assets/background_4.webp";

const BannerShop = () => {
  const images = [anh2, anh3];

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

export default BannerShop;
