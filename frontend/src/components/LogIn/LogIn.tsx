import React, { useState, FormEvent } from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import './LogIn.css';
import axios from "axios"
import { AuthAtom } from '../../recoil/AuthAtom';
import {useSetRecoilState} from "recoil"

const LogIn: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const setAccessToken = useSetRecoilState(AuthAtom);  
  const navigate = useNavigate(); 
  const location = useLocation();
  const from = location?.state?.redirectedFrom?.pathname || "/"; 

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/user/token/', {username:formData['username'], password:formData['password']}).then((res)=>{
      setAccessToken(res.data.access)
      localStorage.setItem('tokens', JSON.stringify(res.data.access))
      navigate(from);
    })
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-container-window">
          <h1 className='header1'>Log In</h1>
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
                type="password"
                name="password"
                required
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
              />
              <input type="submit" value="Log In"/>
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

export default LogIn;
