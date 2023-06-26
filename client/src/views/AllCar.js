import React from 'react'
import CarList from '../components/CarList'
import axios from 'axios'
import { useState, useEffect } from 'react'


const AllCar = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
      axios.get('http://localhost:8000/api/cars')
          .then(res => {
            setCars(res.data)
  
          })
          .catch(err => console.log(err))
    }, [])
  return (
    <div>
        <CarList cars={cars} setCars={setCars}/>
    </div>
  )
}

export default AllCar
