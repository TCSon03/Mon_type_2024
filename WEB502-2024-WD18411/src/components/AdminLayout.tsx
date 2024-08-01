import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-3">
						<ul className="list-group">
							<li className="list-group-item">
								<Link to="/admin">Dashboard</Link>
							</li>
							<li className="list-group-item">
								<Link to="/admin/products">Products</Link>
							</li>
							<li className="list-group-item">
								<Link to="/admin/users">Users</Link>
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
