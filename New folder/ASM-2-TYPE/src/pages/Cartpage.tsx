import { useState } from "react";
import { Cart } from "../interfaces/Cart";

const Cartpage = () => {
  const [cart, setCart] = useState<Cart[]>(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const checkoutData = { cart, user };

  const handleCheckout = () => {
    localStorage.setItem("checkout", JSON.stringify(checkoutData));
    localStorage.setItem("cart", "[]");
    alert("Thanh toán thành công!");
    window.location.reload();
  };

  const removeItem = (id: string | number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (id: string | number) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id: string | number) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      <section>
        <h1>Cart</h1>
        <div className="cart-home">
          <div className="one">
            {cart.length > 0 ? (
              cart.map((item: Cart) => (
                <div key={item.id} className="item-productcart">
                  <div className="item-img">
                    <img src={item.thumbnail} alt="" />
                  </div>
                  <div className="item-title">
                    <div className="i-title">
                      <h5>{item.title}</h5>
                      <button
                        className="removeCart"
                        onClick={() => removeItem(item.id!)}
                      >
                        <i className="bx bxs-message-square-x"></i>
                      </button>
                    </div>
                    <div className="i-price">
                      <div className="price-box">
                        <p className="soluong">{item.quantity}</p>
                        <p className="sotien"> $ {item.price}</p>
                      </div>
                      <div className="more">
                        <button
                          className="giam"
                          onClick={() => decreaseQuantity(item.id!)}
                        >
                          --
                        </button>
                        <button
                          className="tang"
                          onClick={() => increaseQuantity(item.id!)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Giỏ hàng của bạn đang trống!</p>
            )}
          </div>
          {cart.length > 0 && (
            <div className="thanhtoan">
              <h2>Cart Summary</h2>
              <hr />
              <div className="tongtiencart">
                <p>Total Price :</p>
                <p className="sotiencart">
                  $
                  {cart.reduce(
                    (sum: number, item: Cart) =>
                      sum + item.price * item.quantity,
                    0
                  )}
                </p>
              </div>
              <button className="btn-checkout" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Cartpage;
