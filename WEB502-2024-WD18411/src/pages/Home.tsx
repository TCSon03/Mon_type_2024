import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { state } = useContext(ProductContext);

  return (
    <div>
      {state.products.map((item) => (
        <div key={item.id}>
          <Link to={`/product-detail/${item.id}`}>
            <h2>{item.title}</h2>
          </Link>
          <p>{item.price}</p>
          <p>
            <img src={item.thumbnail} alt="" />
          </p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
