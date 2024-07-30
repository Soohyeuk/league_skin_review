import React from 'react'
import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import './Header.css'


// type ResultProps = {
//     id: number; 
//     username: string;
//     email: string; 
// }

const Header = () => {
  const navigate = useNavigate()
  const toLogInPage = () => {
    navigate('/login');
  }
    // const [result, setResult] = useState<ResultProps[]>([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch("http://127.0.0.1:8000/user/", {
    //           method: "GET",
    //         });
    //         const jsonData = await response.json();
    
    //         if (jsonData) {
    //           setResult(jsonData);
    //         } else {
    //           console.error("Unexpected response structure:", jsonData);
    //         }
    //     };
    
    //     fetchData();
    //   }, []);
    
  return (
    <header className='header'>
        <div className='header-image'>
            <img src="https://placehold.co/50x50" alt="" onClick={() => {navigate('/')}}/>
            <p>LOL</p>
        </div>
        <nav className='header-links'>
            <Link className='links' to={'/'}>Skin Reviews</Link>
            <Link className='links' to={'/skin_of_the_day'}>Skin of the Day</Link>
            <Link className='links' to={'/skin_releases'}>Skin Releases</Link>
            <Link className='links' to={'/'}>Your Comments</Link>
        </nav>
        <div className='header-user'>
            <button onClick={toLogInPage}>LogIn</button>
            <img src="https://placehold.co/30" alt="" />
            <img src="https://placehold.co/30" alt="" />
        </div>

        {/* <h1>
        {result.map((value) => {
          return (
            <div>
              <h1>{value.email}</h1>
              <div>{value.username}</div>
            </div>
          );
        })}
      </h1> */}
    </header>
  )
}

export default Header
