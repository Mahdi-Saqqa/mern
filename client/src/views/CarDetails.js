import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'


const CarDetails = () => {
  const [car, setCar] = useState({})
  let {carId} = useParams()
  useEffect(() => {
    console.log(carId)
    axios.get('http://localhost:8000/api/cars/'+carId)

        .then(res => {
          setCar(res.data)
          console.log(res.data)
        }
        )
        .catch(err => console.log(err))

  }, [])
    
  return (
    <div className='container mt-5'>
        <div className="row">
            <div className='col-5'>
                <h1>{car.name}</h1>
                <img src={car.imgUrl} alt={car.name} className='w-100'/>
                <Link to={`/edit/${car._id}`} className="btn btn-primary mt-3">Edit</Link>
            </div>
            <div className='col-7'>
                <h3>Details</h3>
                <p>{car.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default CarDetails