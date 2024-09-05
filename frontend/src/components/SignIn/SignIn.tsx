import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import axios from 'axios';

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const SignIn = await axios.post("http://127.0.0.1:8000/user/all_users", {});

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-container-window">
          <h1 className='header1'>Sign In</h1>
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                required
                placeholder="username"
                value={formData.username}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="email address"
                value={formData.email}
                onChange={handleChange}
              />

              <input
                type="password"
                name="password"
                required
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
              />
              <input type="submit" value="Log In" />
            </form>
          </div>
          <div className="links">
            <Link to="/signin" className="signin-link">
              Create a new account
            </Link>
            <Link to="/recover_account" className="signin-link">
              Forgot a password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
