import React from 'react'
import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import './Header.css'
import {useRecoilValue} from "recoil"
import { isLoginSelector } from '../../recoil/AuthAtom';


const Header = () => {
  const navigate = useNavigate()
  const toLogInPage = () => {
    navigate('/login');
  }
  const isLogin = useRecoilValue(isLoginSelector);
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
            {isLogin? <p>user</p> :<button onClick={toLogInPage}>LogIn</button>}
            <img src="https://placehold.co/30" alt="" />
            <img src="https://placehold.co/30" alt="" />
        </div>
    </header>
  )
}

export default Header
