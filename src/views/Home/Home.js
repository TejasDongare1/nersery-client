import React, { useEffect, useState } from 'react'
import "./Home.css"
import PlantCard from '../../components/PlantCard/PlantCard'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import ImgAdd from "./add-icon.png"
import { Link } from 'react-router-dom'


function Home() {

  const [plants, setPlants] = useState([])

  const loadPlants = async () => {
    toast.loading("Loading Plants...")
    const response = await axios.get(`http://localhost:8000/plants`)
    toast.dismiss()
    toast.success("Plant Loaded Successfully")

    setPlants(response.data.data)
    
  }

  useEffect(() => {
    loadPlants()
  }, [])

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
            description={description} 
            loadPlants={loadPlants}/>)
        })
      }
      <Toaster />
      <Link to="/add">
      <img src={ImgAdd} alt="" srcset="" className='btn-add'/>
      </Link>
    </div>
  )
}

export default Home