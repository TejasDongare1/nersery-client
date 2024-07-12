import React from 'react'
import "./Home.css"
import PlantCard from '../../components/PlantCard/PlantCard'

function Home() {

  const plants = [
    {
      "id": 545,
      "name": "mango",
      "category": "Flowering Plant",
      "image": "https://example.com/bamboo.jpg",
      "price": 50,
      "description": "Bamboo is a tropical plant native to China, Indonesia, and Taiwan."
    },
    {
      "_id": "668ee4ed25a27bfe10a5bea8",
      "name": "jasmine",
      "category": "inddor",
      "image": "image.com",
      "price": 200,
      "description": "Flowering plant",
      "__v": 0
    }
  ]

  return (
    <div>
      <h1 className='heading'>Plants</h1>
      {
        plants.map((plant, i) => {

          const { _id,
            name,
            category,
            image,
            price,
            description } = plant

          return (<PlantCard 
            key={i}  // add unique key to each card for better performance and accessibility
            _id={_id}
            name={name}
            category={category}
            price={price}
            image={image}
            description={description} />)
        })
      }

    </div>
  )
}

export default Home