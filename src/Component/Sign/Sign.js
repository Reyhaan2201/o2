import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Sign.css";

const Sign = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    console.log(data); // You can handle form submission logic here
    try {
      // Make a POST request to your backend endpoint to save user data
      const response = await axios.post("http://localhost:1804/Outfitoracle/Signin", {
        name: data.name,
        email: data.email,
        password: data.password
      });

      // Handle success response
      console.log("User data saved:", response.data);
      setIsSubmitted(true); // Set isSubmitted to true after successful submission
    } catch (error) {
      // Handle error
      console.error("Error saving user data:", error);
    }
  };

  return (
    <div className="container full-height mb-3">
      {!isSubmitted && ( // Display sign-up form if not submitted
        <div className="row justify-content-center pb-5"> {/* Center the row */}
          <div className="col-md-6 image-section d-flex justify-content-center align-items-center"> {/* Center the image section */}
            <div className="image-container text-center">
              {/* Image and heading content goes here */}
              <h2>Welcome to our website</h2>
              {/* Google Sign-In button */}
              <div className="login col-7">
                <Link to="/Login" className="text-center text-dark py-2" style={{ display: "block", fontWeight: "800" }}>LOGIN</Link>
              </div>
            </div>
          </div>
          {/* Form Section */}
          <div className="col-md-6 form-section">
            <div className="card mt-5">
              <div className="card-body">
                <h2 className="text-center mb-4 text-light" style={{ fontWeight: "800" }}>Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? "is-invalid" : ""}`}
                      placeholder="Enter your name"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      placeholder="Enter your email"
                      {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className={`form-control ${errors.password ? "is-invalid" : ""}`}
                      placeholder="Enter your password"
                      {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long" } })}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                  </div>
                  <button type="submit" className="btn btn-primary col-12 mt-3 mb-5" id="btn">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {isSubmitted && ( // Display thank you message if submitted
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="alert alert-success text-center mt-5" role="alert">
              Thank you for signing up!
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sign;
