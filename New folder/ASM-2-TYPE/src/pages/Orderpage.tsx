import React from "react";
import { Cart } from "../interfaces/Cart";

const Orderpage = () => {
  const bill = JSON.parse(localStorage.getItem("bill") || "{}");

  return (
    <section>
      <h1>Order Summary</h1>
      <div className="order-home">
        {bill.cart ? (
          bill.cart.map((item: Cart, index: number) => (
            <div key={index} className="item-productorder">
              <div className="item-img">
                <img src={item.thumbnail} alt="" />
              </div>
              <div className="item-title">
                <div className="i-title">
                  <h5>{item.title}</h5>
                  <p>x</p>
                </div>
                <div className="i-price">
                  <div className="price-box">
                    <p className="soluong">{item.quantity}</p>
                    <p className="sotien"> $ {item.price}</p>
                  </div>
                  <div className="more">
                    <p className="tongtien"> $ {item.quantity * item.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No orders have been placed yet.</p>
        )}
      </div>
    </section>
  );
};

export default Orderpage;
