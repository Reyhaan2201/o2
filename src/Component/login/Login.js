import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });

  const [otp, setOTP] = useState('');
  const [showOTPSection, setShowOTPSection] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isWrongOTP, setIsWrongOTP] = useState(false); // State to manage wrong OTP pop-up message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login information to backend server to check if user is already logged in
      const response = await axios.post('http://localhost:1804/check-login', formData);
      if (response.data.isLoggedIn) {
        // User is already logged in, show message
        setIsLoggedIn(true);
      } else {
        // User is not logged in, send request for OTP
        const otpResponse = await axios.get(`http://localhost:1804/send-otp/${formData.phoneNumber}`);
        console.log('Response from server:', otpResponse.data);
        // For demonstration purposes, let's show the OTP section
        setShowOTPSection(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    try {
      // Verify OTP with backend server
      const response = await axios.post('http://localhost:1804/verify-otp', { otp });
      console.log('OTP verification response:', response.data);
      // Set isLoggedIn to true if OTP is verified successfully
      setIsLoggedIn(true);
      // Reset wrong OTP message state
      setIsWrongOTP(false);
    } catch (error) {
      console.error('Error verifying OTP:', error);
      // Set isWrongOTP to true to display wrong OTP pop-up message
      setIsWrongOTP(true);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              {!showOTPSection && !isLoggedIn && (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block col-12 my-3">Send OTP</button>
                </form>
              )}
              {showOTPSection && !isLoggedIn && (
                <form onSubmit={handleOTPSubmit}>
                  <div className="form-group mt-3">
                    <label htmlFor="otp">Enter OTP:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="otp"
                      value={otp}
                      onChange={(e) => setOTP(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block col-12 my-3">Submit OTP</button>
                </form>
              )}
              {isLoggedIn && (
                <div className="alert alert-success mt-3" role="alert">
                  Logged in successfully!
                </div>
              )}
              {/* Pop-up message for wrong OTP */}
              {isWrongOTP && (
                <div className="alert alert-danger mt-3" role="alert">
                  Incorrect OTP. Please try again.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
