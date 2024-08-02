import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";
import { Product } from "../interfaces/Product";
import { Cart } from "../interfaces/Cart";
import { User } from "../interfaces/User";
import Banner from "../components/Banner";
import BannerShop from "../components/Bannershop";

const Shop = () => {
  const { state } = useContext(ProductContext);
  const [user, setUser] = useState({} as User);
  const [searchQuery, setSearchQuery] = useState(""); // State to manage the search query
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // State to manage the filtered products

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(user);
    setFilteredProducts(state.products); // Initialize filtered products with all products
  }, [state.products]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = state.products.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

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
      <BannerShop />
      <section className="input-shop">
        <input
          className="input-shop"
          type="text"
          placeholder="Eg: beauty"
          value={searchQuery}
          onChange={handleSearch}
        />
      </section>

      <section className="shop">
        <section className="trending-product box-left">
          <div>
            <h2>Category</h2>
            <div>
              <a href="">Beauty</a>
            </div>
            <div>
              <a href="">Fragrances</a>
            </div>
            <div>
              <a href="">Furniture</a>
            </div>
            <div>
              <a href="">Groceries</a>
            </div>
          </div>
          {/* <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Tất cả danh mục</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select> */}
        </section>
        <section className="trending-product box-right" id="trending">
          <div className="center-text">
            <h2>
              Our Trending <span>Products</span>
            </h2>
          </div>

          <div className="products">
            {filteredProducts.map((item) => (
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
      </section>
    </>
  );
};

export default Shop;
