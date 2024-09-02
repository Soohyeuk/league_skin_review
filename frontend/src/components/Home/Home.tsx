import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import champList from './champList.json'
import {useNavigate } from 'react-router-dom'

const Home : React.FC = () => {
  const navigate = useNavigate();
  const handleClick = (name:string) => {
    const nav_url = 'skin/' + name; 
    navigate(nav_url);
  }
  const champIconList = Object.keys(champList.data)
  
  return (
    <div>
        <Header/>
        <div className='home-hero-container'>
          <div className='home-hero'>
            <h1>Have any skin you like? Leave a review!</h1>
            <div className='par-wrapper'>
              <p>
                All skins in League of Legends are rated by the users, and is granted a tier. Let your opinion be part of it too! 
              </p>
            </div>
          </div>
        </div>
        <div className='home-container'>
            <div className='champ-container'>
              <div className='champ-all'>
                <h1 id='all'>All</h1>
              </div>
              <div className='champ-list-container'>
                {champIconList.map((name) => (
                  <div key={name} className='champ-icon-and-name'>
                    <img src= {`/src/img/champion/${name}.png`} className='champ-tiles' onClick={() => handleClick(name)}/>
                    <p>{name === 'MonkeyKing' ? 'Wukong' : name}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home
