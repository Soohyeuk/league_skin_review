import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import './skinOfTheDay.css'


type ResultProps = {
  skin_img: string,
  skin_name: string, 
  release_date: string, 
  price: number,
  reviews: {
    id: number, 
    body: string, 
    rating: number, 
    created_at: string, 
    owner_id: number, 
    skin: number
  }[], 
  average_rating: number 
}

const SkinOfTheDay = () => {

  const [result, setResult] = useState<ResultProps[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://127.0.0.1:8000/skin/", {
              method: "GET",
            });
            const jsonData = await response.json();
    
            if (jsonData) {
              setResult(jsonData);
            } else {
              console.error("Unexpected response structure:", jsonData);
            }
        };
    
        fetchData();
      }, []);
  return (
    <div>
      <Header/>
      <div className='day-container'>
        {result.map((value) => {
          return (
            <div className='day-hero-container'>
              <img src={value.skin_img} className='skinoftheday-img'/>
              <div className='day-hero-title'>
                <h1>{value.skin_name}</h1>
              </div>
            </div>
          );})}
      </div>
    </div>
  )
}

export default SkinOfTheDay
