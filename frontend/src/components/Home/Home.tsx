import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import champList from './champList.json'


const Home = () => {
  // const apikey = "RGAPI-92fa99c5-5fd2-4924-8260-9df68e886717"
  // const champNameUrl = 'https://ddragon.leagueoflegends.com/cdn/14.13.1/data/en_US/champion.json' + '?api_key=' + apikey

  const champIconList = Object.keys(champList.data)
  
  return (
    <div>
        <Header/>
        <div className='home-hero-container'>
          <div className='home-hero'>
            <h1>yoyoyo</h1>
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
                    <img src= {`/src/img/champion/${name}.png`}/>
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
