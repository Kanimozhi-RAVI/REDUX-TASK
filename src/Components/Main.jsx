import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getalluserdetailRequest } from './MainAction';
import './Main/Main.css';
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router';

function Main() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getalluserdetailRequest(formData));
    alert('Form submitted (but not confirmed success from server)');
  };
  function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
const registerNav = () => {
  navigate('/form')
}

  return (
    <div className='body-text'>
    <div className="extra-login-wrapper ">
      <div className="extra-container">
        <div className="extra-left">
          <h2>Welcome Back!</h2>
          <p>Experience the best platform with stunning design.</p>
          <button className="extra-register-btn" onClick={ registerNav}>REGISTER</button>
        </div>

        <div className="extra-right glass">
			<div className='logo'>
			<FaUserCircle/>
			</div>
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
                <div className="extra-options ">
			             <input type="checkbox" onChange={() => setShowPassword(!showPassword)} /> <span> show password</span>
                </div>

            <button type="submit" className="extra-login-btn">LOGIN</button>
          </form>
        </div>
      </div>
    </div>
     </div>
  );
}

export default Main;
