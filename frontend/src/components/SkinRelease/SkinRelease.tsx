import React from 'react'
import Header from '../Header/Header'

const SkinRelease = () => {

  return (
    <div>
      <Header/>
      <div className='body-container'>
        <article className='hero-container'>
            <div className='hero'>
                This is where new release article should be at with its picture. 
                (perhaps most reviewed skins and skin of the day can be on a rotation as well)
            </div>
        </article>
        <article className='articles-container'>
            <div className='thumbnail-container'>
                
            </div>
        </article>
      </div>
    </div>
  )
}

export default SkinRelease
