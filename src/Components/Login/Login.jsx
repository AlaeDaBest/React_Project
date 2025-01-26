import React from "react";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="brand-name">Luxury Perfume</h1>
        <p className="tagline">Discover the magic of captivating scents.</p>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Your email address"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Your password"
            />
          </div>
          <button type="submit" className="login-btn">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
