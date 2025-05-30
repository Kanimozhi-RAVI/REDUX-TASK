import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getalluserdetailRequest } from './MainAction';

function Main() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Data Submitted:', formData);

    dispatch(getalluserdetailRequest(formData));

    alert('Form submitted (but not confirmed success from server)');
  };

  return (
    <div className="container bg-secondary" style={{ maxWidth: '400px', marginTop:"200px"}}>
      <h3 className="mb-4">Login Form</h3>

      <form onSubmit={handleSubmit}>
         <div className="mb-3">
          <label htmlFor="username" className="form-label">User Name:</label>
          <input
            type="text"
            className="form-control mb-5"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control mb-5"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 mb-5">Login</button>
      </form>
    </div>
  );
}

export default Main;
