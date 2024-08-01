import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  if (!user || user.role !== "admin") {
    return (
      <>
        <h1>Ban khong co quyen vao trang nay!</h1>
        <Link to="/">Quay lai trang mua sam!</Link>
      </>
    );
  }
  return (
    <div>
      <div className="">
        <div className="row containerr header-admin">
          <div className="col-3">
            <ul className="list-group">
              <li className="list-group-item">
                <Link className="css-a" to="/admin">
                  Dashboard
                </Link>
              </li>
              <li className="list-group-item">
                <Link className="css-a" to="/admin/user">
                  Users
                </Link>
              </li>
              <li className="list-group-item">
                <Link className="css-a" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-9">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
