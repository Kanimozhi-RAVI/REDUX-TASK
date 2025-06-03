import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import register from '../Assests/reg.jpg';

function RegistrationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname:'', lastName: '', dateofBirth:'', phone:'', Gender:''

  });

  const  handleChange = (e) =>{
    e.preventDefault();
    const { name , value} = e.target;
    setFormData((pre)=> ({...pre, [name]:value} ));
  
  } 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('profileData', JSON.stringify(formData));
    navigate('/pro');
  };

  return (
    <div className="container-fluid py-5 min-vh-100  bg-light ">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden mt-5">
            <div className="row g-0">

              <div className="col-md-6 p-5 bg-white py-5">
                <h3 className="text-center fw-bold text-uppercase mb-5" style={{ color: "#812990" }}>
                  Registration Form
                </h3>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <input name="firstName" value={formData.firstName} onChange={handleChange}
                        type="text" className="form-control p-2" placeholder="First Name" required  style={{ borderColor: "#812990" }}/>
                    </div>
                    <div className="col-md-6 mb-4">
                      <input name="lastName" value={formData.lastName} onChange={handleChange}
                        type="text" className="form-control p-2" placeholder="Last Name" required style={{ borderColor: "#812990" }} />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <input name="email" value={formData.email} onChange={handleChange}
                        type="email" className="form-control p-2" placeholder="Email" required  style={{ borderColor: "#812990" }}/>
                    </div>
                    <div className="col-md-6 mb-4">
                      <input name="password" value={formData.password} onChange={handleChange}
                        type="password" className="form-control p-2" placeholder="Password" required  style={{ borderColor: "#812990" }}/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <input name="birthday" value={formData.birthday} onChange={handleChange}
                        type="date" className="form-control p-2" required style={{ borderColor: "#812990" }} />
                    </div>
                    <div className="col-md-6 mb-4">
                      <input name="phone" value={formData.phone} onChange={handleChange}
                        type="text" className="form-control p-2" placeholder="Phone Number" required  style={{ borderColor: "#812990" }}/>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label me-3">Gender:</label>
                    {['Female', 'Male', 'Other'].map(g => (
                      <div className="form-check form-check-inline" key={g}>
                        <input type="radio" name="gender" value={g}
                          checked={formData.gender === g}
                          onChange={handleChange}
                          className="form-check-input p-2"  style={{ borderColor: "#812990" }}/>
                        <label className="form-check-label">{g}</label>
                      </div>
                    ))}
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <select name="state" value={formData.state} onChange={handleChange}
                        className="form-select p-2" required style={{ borderColor: "#812990" }}>
                        <option value="">Select State</option>
                        <option>Tamil Nadu</option>
                        <option>Kerala</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-4">
                      <select name="city" value={formData.city} onChange={handleChange}
                        className="form-select p-2" required style={{ borderColor: "#812990" }}>
                        <option value="">Select City</option>
                        <option>Chennai</option>
                        <option>Coimbatore</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <input name="pincode" value={formData.pincode} onChange={handleChange}
                      type="text" className="form-control p-2" placeholder="Pincode" required style={{borderColor:"#812990"}} />
                  </div>

                  <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary px-5  " style={{ backgroundColor: "#812990", borderRadius:"10px" }}><h5>Submit</h5></button>
                  </div>
                </form>
              </div>

              <div className="col-md-6 d-none d-md-block position-relative">
                <img src={register} alt="reg" className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 text-white d-flex flex-column justify-content-center align-items-center p-4">
                  <h2 className="fw-bold">Welcome Back!</h2>
                  <p>To keep connected with us, login with your info</p>
                  <button onClick={() => navigate('/')} className="btn btn-outline-light rounded-pill">
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
};

export default RegistrationForm;
