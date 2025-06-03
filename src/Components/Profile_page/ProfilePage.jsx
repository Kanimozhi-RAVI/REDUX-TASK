import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProfilePage() {
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (!userData) {
    return (
      <div className="container text-center mt-5">
        <h3>No user data found. Please register first.</h3>
      </div>
    );
  }
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 border-0">
        <h2 className="text-center mb-4" style={{ color: "#812990" }}>User Profile</h2>
        <div className="row mb-3">
          <div className="col-md-6"><strong>First Name:</strong> {userData.firstName}</div>
          <div className="col-md-6"><strong>Last Name:</strong> {userData.lastName}</div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6"><strong>Email:</strong> {userData.email}</div>
          <div className="col-md-6"><strong>Password:</strong> {userData.password}</div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6"><strong>Date of Birth:</strong> {userData.dob}</div>
          <div className="col-md-6"><strong>Phone Number:</strong> {userData.phone}</div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6"><strong>Gender:</strong> {userData.gender}</div>
          <div className="col-md-6"><strong>State:</strong> {userData.state}</div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6"><strong>City:</strong> {userData.city}</div>
          <div className="col-md-6"><strong>Pincode:</strong> {userData.pincode}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
