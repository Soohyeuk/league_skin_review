import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import './skinOfTheDay.css'
import axios from 'axios'


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

const SkinOfTheDay : React.FC = () => {

  const [result, setResult] = useState<ResultProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/skin/");
            setResult(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchData();
  }, []);
  return (
    <div>
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
