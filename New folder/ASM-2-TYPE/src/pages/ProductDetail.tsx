import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { useParams } from "react-router-dom";
import { User } from "../interfaces/User";
import { Product } from "../interfaces/Product";
import { Cart } from "../interfaces/Cart";

const ProductDetail = () => {
  const { id } = useParams();
  const { state, getDetail } = useContext(ProductContext);
  const [user, setUser] = useState({} as User);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(storedUser);
    if (id) {
      getDetail(id);
    }
  }, [id, getDetail]);
  const addToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const index = cart.findIndex((item: Cart) => item.id === product.id);
    if (index === -1) {
      cart.push({ ...product, quantity: 1 });
    } else {
      cart[index].quantity += 1;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div>
      <section className="main-product">
        <h1>Chi tiết sản phẩm</h1>
        <div className="product">
          <div className="img-product">
            {state.seletedProduct && (
              <img src={state.seletedProduct.thumbnail} alt="" />
            )}
          </div>
          <div className="item-product">
            {state.seletedProduct && (
              <p className="category">{state.seletedProduct.category}</p>
            )}

            {state.seletedProduct && <h2>{state.seletedProduct.title}</h2>}

            {state.seletedProduct && (
              <p className="short-description">
                {state.seletedProduct.description}
              </p>
            )}

            <div>
              {state.seletedProduct && (
                <span>$ {state.seletedProduct.price}</span>
              )}
            </div>
            <div>
              <button
                onClick={
                  user?.email
                    ? () => addToCart(state.seletedProduct!)
                    : () => alert("Please login to add to cart")
                }
              >
                <i className="bx bx-cart-alt"></i>Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="discription">
          <h3>Discription</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            saepe modi veniam omnis consequuntur asperiores quas in aperiam id
            voluptatibus, labore enim non beatae. Alias eveniet voluptate
            numquam ex laboriosam!
          </p>
        </div>
        <div className="about">
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            saepe modi veniam omnis consequuntur asperiores quas in aperiam id
            voluptatibus, labore enim non beatae. Alias eveniet voluptate
            numquam ex laboriosam!
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
