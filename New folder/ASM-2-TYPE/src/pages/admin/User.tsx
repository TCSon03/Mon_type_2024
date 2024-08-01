import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

const UserList = () => {
  const { state, handleRemove } = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the users based on the search query
  const filteredUsers = state.users.filter((user) =>
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="table_header">
        <p>User</p>
        <div>
          <input
            type="text"
            placeholder="Search user"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    className="button"
                    onClick={() => handleRemove(user.id!)}
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
  );
};

export default UserList;
