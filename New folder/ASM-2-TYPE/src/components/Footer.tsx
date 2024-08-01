import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <section className="contact">
        <div className="contact-info">
          <div className="first-info">
            <img src={logo} alt="" />
            <p>
              3245 Grant Street Longview, <br></br> TX united kingdom 765378
            </p>
            <p>01928502832</p>
            <p>truongcongson@fpt.edu.vn</p>

            <div className="social-icon">
              <a href="">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="">
                <i className="bx bxl-youtube"></i>
              </a>
              <a href="">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="second-info">
            <h4>Support</h4>
            <p>Contact us</p>
            <p>About page</p>
            <p>Size Guide</p>
            <p>Shopping & Resturns</p>
            <p>Privacy</p>
          </div>

          <div className="third-info">
            <h4>Shop</h4>
            <p>Men's Shopping</p>
            <p>Women's Shopping</p>
            <p>Kid's Shopping</p>
            <p>Furniture</p>
            <p>Discount</p>
          </div>

          <div className="fourth-info">
            <h4>Company</h4>
            <p>About</p>
            <p>Blog</p>
            <p>Affiliable</p>
            <p>Login</p>
          </div>

          <div className="five">
            <h4>Subscribe</h4>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              labore.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              labore.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              labore.
            </p>
          </div>
        </div>
      </section>
      <div className="end-text">
        <p>Copyright @2024 .Truong Cong Son</p>
      </div>
    </div>
  );
};

export default Footer;
