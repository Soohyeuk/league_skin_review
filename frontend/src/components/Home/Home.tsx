import React, { useState } from 'react'
import './Home.css'
import Header from '../Header/Header'
import champList from './champList.json'

const Home = () => {
  const champNameUrl = 'https://ddragon.leagueoflegends.com/cdn/14.13.1/data/en_US/'


  const champIconList = Object.keys(champList.data)
  return (
    <div>
        <Header/>
        <div className='home-hero-container'>
          <div className='home-hero'>
            <h1>Have any skin you like? Leave a review!</h1>
            <div className='par-wrapper'>
              <p>
                yoyooyyoyoyo
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
                    <img src= {`/src/img/champion/${name}.png`} className='champ-tiles'/>
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
