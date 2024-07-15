import React from 'react'
import "./PlantCard.css"

function PlantCard({_id, name, category, image, price, description}) {
  return (
    <div className='plant-card'>
        <h1 className='plant-title'>{name}</h1>
        <img src={image} alt={name} className='plant-image' />
        <h5 className='desc'>{description}</h5>
        <p className='plant-category'>Category:{category}</p>
        <p className='plant-price'>Price: {price}</p>
        <button type='button' className='btn'>Buy Now</button>
    </div>
  )
}

export default PlantCard