import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import '../Login_page/Main.css';
import { FaUserCircle } from "react-icons/fa";
import { toast ,ToastContainer } from 'react-toastify';
import { getloginRequest } from "../Actions/MainAction";
import { useSelector } from 'react-redux';

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { error } = useSelector((state) => state.user || {});
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getloginRequest(formData));

    setTimeout(() => {
      navigate("/profile");
    }, 1000);
  };

  return (
    <div className='body-text'>
      <div className="extra-login-wrapper">
        <div className="extra-container">
          <div className="extra-left">
            <h2>Welcome Back!</h2>
            <p>Experience the best platform with stunning design.</p>
            <button className="extra-register-btn">REGISTER</button>
          </div>

          <div className="extra-right glass">
            <div className='logo'><FaUserCircle /></div>
            <h3>Sign In</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Email"
                value={formData.username}
                onChange={handleChange}
                required
                style={{width:"100%"}}
              />

              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{width:"100%"}}

              />

              <div className="extra-options">
                <input type="checkbox" onChange={() => setShowPassword(!showPassword)} />
                <span> Show Password</span>
              </div>

              <button type="submit" className="extra-login-btn">LOGIN</button>
            </form>

          </div>
        </div>
      </div>
              <ToastContainer />

    </div>
  );
}

export default Main;
