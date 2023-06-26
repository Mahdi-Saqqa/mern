import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import CarForm from '../components/CarForm'
const AddCar = (props) => {
    const [errors, setErrors] = React.useState([])
    const navigate = useNavigate()
    const createCar = car => {
        axios.post('http://localhost:8000/api/cars', car)
            .then(res => {
              console.log(res)
              navigate('/list')
            }
            )
            .catch(err =>       setErrors(err.response.data.message)
            )
    }
  return (
    <div>
        <CarForm formSubmitted={createCar} formAction={"add car"} errors={errors}/>
    </div>
  )
}

export default AddCar;