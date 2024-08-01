import { Link } from "react-router-dom";
import { Product } from "../../interfaces/Product";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";

type Props = {
  products: Product[];
  handleRemove: (id: number | string) => void;
};

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const { state, handleRemove } = useContext(ProductContext);

  useEffect(() => {
    setFilteredProducts(state.products);
  }, [state.products]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = state.products.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };
  return (
    <div>
      <div>
        <div className="table_header">
          <p>Dashboard</p>
          <div>
            <input
              type="text"
              placeholder="product"
              value={searchQuery}
              onChange={handleSearch}
            />
            <Link to={`/admin/product-add`} className="add-new">
              Add new product
            </Link>
          </div>
        </div>
        <div className="table-section">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>

                <th>Description</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td>
                    <img src={item.thumbnail} alt={item.title} width={100} />
                  </td>
                  <td>
                    <Link
                      to={`/admin/product-edit/${item.id}`}
                      className="button btn-edit"
                    >
                      <i className="bx bxs-edit"></i>
                    </Link>
                    <button
                      className="button"
                      onClick={() => handleRemove(item.id!)}
                    >
                      <i className="bx bxs-minus-circle"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
