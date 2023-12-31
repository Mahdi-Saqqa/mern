import React from 'react'
import CarForm from '../components/CarForm'
import DeleteButton from '../components/DeleteButton'
import  axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom' 
import { useParams } from 'react-router-dom'
const UpdateCar = () => {
  const Navigate = useNavigate()
  const [car, setCar] = useState([])
  const {carId} = useParams()
  const [loaded, setLoaded] = useState(false)
  const [errors, setErrors] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/api/cars/' + carId)
    .then(res => {
      setCar(res.data)
      setLoaded(true)
    })
    .catch(err => {
      console.log(err)

    })
  }, [])
  const formSubmitted = car => {
    axios.put('http://localhost:8000/api/cars/' + carId, car)
    .then(res => {
      console.log(res)
      Navigate('/list')
    })
    .catch(err => {
      setErrors(err.response.data.message)
    })
  }

  return (
    <div className='row'>
      {
        loaded?
        <>
        <CarForm car={car} formAction={"update car"} formSubmitted={formSubmitted} errors={errors}/>

        </>
        :
        <p>Loading...</p>
      }
    </div>
  )
}

export default UpdateCar