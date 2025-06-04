import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getsignupdetailRequest } from '../Actions/MainAction';
import { useNavigate } from 'react-router';
import register from '../Assests/reg.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function RegistrationForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', password: '',
    birthday: '', phone: '', gender: '', state: '', city: '', pincode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((pre) => ({ ...pre, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getsignupdetailRequest(formData));
    setTimeout(() => {
      navigate('/login');  // navigate to login after registration
    }, 1000);
  };

  return (
    <div className="container-fluid py-5 min-vh-100 bg-light">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden mt-5">
            <div className="row g-0">

              <div className="col-md-6 p-5 bg-white py-5">
                <h3 className="text-center fw-bold text-uppercase mb-5" style={{ color: "#812990" }}>
                  Registration Form
                </h3>

                <form onSubmit={handleSubmit}>
                  {/* ... Your input fields as you already wrote ... */}
                  {/* First Name, Last Name, Email, Password, Birthday, Phone, Gender, State, City, Pincode */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <input name="firstName" value={formData.firstName} onChange={handleChange}
                        type="text" className="form-control p-2" placeholder="First Name" required />
                    </div>
                    <div className="col-md-6 mb-4">
                      <input name="lastName" value={formData.lastName} onChange={handleChange}
                        type="text" className="form-control p-2" placeholder="Last Name" required />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <input name="email" value={formData.email} onChange={handleChange}
                        type="email" className="form-control p-2" placeholder="Email" required />
                    </div>
                    <div className="col-md-6 mb-4">
                      <input name="password" value={formData.password} onChange={handleChange}
                        type="password" className="form-control p-2" placeholder="Password" required />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <input name="birthday" value={formData.birthday} onChange={handleChange}
                        type="date" className="form-control p-2" required />
                    </div>
                    <div className="col-md-6 mb-4">
                      <input name="phone" value={formData.phone} onChange={handleChange}
                        type="text" className="form-control p-2" placeholder="Phone Number" required />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label me-3">Gender:</label>
                    {['Female', 'Male', 'Other'].map(g => (
                      <div className="form-check form-check-inline" key={g}>
                        <input type="radio" name="gender" value={g}
                          checked={formData.gender === g}
                          onChange={handleChange}
                          className="form-check-input" />
                        <label className="form-check-label">{g}</label>
                      </div>
                    ))}
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <select name="state" value={formData.state} onChange={handleChange}
                        className="form-select p-2" required>
                        <option value="">Select State</option>
                        <option>Tamil Nadu</option>
                        <option>Kerala</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-4">
                      <select name="city" value={formData.city} onChange={handleChange}
                        className="form-select p-2" required>
                        <option value="">Select City</option>
                        <option>Chennai</option>
                        <option>Coimbatore</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <input name="pincode" value={formData.pincode} onChange={handleChange}
                      type="text" className="form-control p-2" placeholder="Pincode" required />
                  </div>

                  <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary px-5" style={{ backgroundColor: "#812990", borderRadius: "10px" }}>
                      <h5>Submit</h5>
                    </button>
                  </div>
                </form>
              </div>

              <div className="col-md-6 d-none d-md-block position-relative">
                <img src={register} alt="reg" className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 text-white d-flex flex-column justify-content-center align-items-center p-4">
                  <h2 className="fw-bold">Welcome Back!</h2>
                  <p>To keep connected with us, login with your info</p>
                  <button onClick={() => navigate('/login')} className="btn btn-outline-light rounded-pill">
                    Go to Sign In
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
