import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import './SkinRelease.css'

type ResultProps = {
  id: number, 
  title: string, 
  header_image: string, 
  release_date: string, 
  article_body: string, 
}

const SkinRelease: React.FC = () => {
  const [result, setResult] = useState<ResultProps[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/article/", {
          method: "GET",
        });
        const jsonData = await response.json();
        
        console.log("Fetched data:", jsonData); // Log the entire response for debugging

        // Assuming jsonData contains an array of articles
        if (jsonData ) {
          setResult(jsonData); // Adjust this if the structure is different
        } else {
          console.error("Unexpected response structure:", jsonData);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("Result updated:", result); // Log result whenever it updates
  }, [result]);

  return (
    <div>
      <Header/>
      <div className='container'>
        <div className='title'>
          <h1>Release News</h1>
        </div>
        <div className='body-container'>
          {result ? result.map((value) => {
            return (
              <div >
                <img className='image' src={value.header_image} />
                <div>
                  <h1>{value.title}</h1>
                </div>
              </div>
          );}) : <p>Loading...</p>}

          {/* {result ? <p>{result[0].title}</p> : <p>Loading...</p>}
          <img className='image' src={result?result[0].header_image:""} alt="" /> */}
        </div>
      </div>
    </div>
  )
}

export default SkinRelease
