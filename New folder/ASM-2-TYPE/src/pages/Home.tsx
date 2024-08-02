import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";
import log from "../assets/Công_Sơn-removebg-preview.png";
import new1 from "../assets/bl-1.png";
import new2 from "../assets/bl-2.png";
import new3 from "../assets/bl-3.png";
import { Product } from "../interfaces/Product";
import { Cart } from "../interfaces/Cart";
import { User } from "../interfaces/User";
import Banner from "../components/Banner";
const Home = () => {
  const { state } = useContext(ProductContext);
  // const [category, setCategory] = useState("");
  const [user, setUser] = useState({} as User);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(user);
    // console.log(!!user);
  }, []);

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
    <>
      {/* <Header /> */}
      {/* <section className="main-home">
        <div className="main-text">
          <h5>Winter Collection</h5>
          <h1>
            New Winter <br></br> Collection 2024
          </h1>
          <p>There's Nothing like Trend</p>

          <Link to="" className="main-btn a">
            Shop Now
          </Link>
        </div>
      </section> */}
      <Banner />
      {/*  top trending */}
      <section className="trending-product" id="trending">
        <div className="center-text">
          <h2>
            Our Trending <span>Products</span>
          </h2>
        </div>

        <div className="products">
          {state.products.map((item) => (
            <div className="row" key={item.id}>
              <Link to={`/product-detail/${item.id}`}>
                <img src={item.thumbnail} alt="" />
              </Link>
              <div className="product-text">
                <h5>Sale</h5>
              </div>

              <div className="ratting-heart">
                <div className="ratting">
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bxs-star-half"></i>
                </div>
                <div className="heart-icon">
                  <button
                    onClick={
                      user?.email
                        ? () => addToCart(item)
                        : () => alert("Please login to add to cart")
                    }
                  >
                    <i className="bx bx-cart-alt"></i>
                  </button>
                </div>
              </div>
              <div className="price">
                <Link className="text" to={`/product-detail/${item.id}`}>
                  <h4>{item.title}</h4>
                </Link>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <!-- client review section --> */}
      <section className="client-reviews">
        <div className="reviews">
          <h3>Client Review</h3>
          <img src={log} alt=""></img>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Explicabo officiis ipsam ullam blanditiis mollitia, perferendis sint
            vero atque, numquam facere quaerat <br /> molestias ex ipsum cum
            tempore. Labore a nobis maxime!
          </p>
        </div>
      </section>
      {/* <!-- update-news-section --> */}
      <section className="Update-news">
        <div className="up-center-text">
          <h2>New Updates</h2>
        </div>
        <div className="update-cart">
          <div className="cart">
            <img src={new1} alt="" />
            <h5>26 jan 2024</h5>
            <h4>Let's Start bring sale on this summer vacation.</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae repellat, voluptatem magnam laboriosam veritatis
              laudantium explicabo vero assumenda necessitatibus quisquam et
              mollitia eligendi debitis, deserunt maiores id. Quibusdam,
              mollitia rem.
            </p>
            <h6>Continue Reading..</h6>
          </div>
          <div className="cart">
            <img src={new2} alt="" />
            <h5>26 jan 2024</h5>
            <h4>Let's Start bring sale on this summer vacation.</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae repellat, voluptatem magnam laboriosam veritatis
              laudantium explicabo vero assumenda necessitatibus quisquam et
              mollitia eligendi debitis, deserunt maiores id. Quibusdam,
              mollitia rem.
            </p>
            <h6>Continue Reading..</h6>
          </div>
          <div className="cart">
            <img src={new3} alt="" />
            <h5>26 jan 2024</h5>
            <h4>Let's Start bring sale on this summer vacation.</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae repellat, voluptatem magnam laboriosam veritatis
              laudantium explicabo vero assumenda necessitatibus quisquam et
              mollitia eligendi debitis, deserunt maiores id. Quibusdam,
              mollitia rem.
            </p>
            <h6>Continue Reading..</h6>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
