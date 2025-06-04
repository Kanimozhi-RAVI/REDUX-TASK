import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getloginRequest,
  deleteUserRequest,
} from "../Actions/MainAction";

const UserList = () => {
  const dispatch = useDispatch();
  const { users = [], loading, error } = useSelector((state) => state.user ?? {});

  useEffect(() => {
    dispatch(getloginRequest());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUserRequest(id));
    }
  };

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;
  if (users.length === 0) return <p>No users found.</p>;

  return (
    <div className="container mt-5">
      <h2>User List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                {/* Delete button */}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
