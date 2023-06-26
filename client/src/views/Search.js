import React from 'react'
import CarList from '../components/CarList'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const Search = () => {
    let {search} = useParams()
    const [cars, setCars] = useState([])
    useEffect(() => {
      console.log(search)
      axios.get('http://localhost:8000/api/cars/search/'+search)
          .then(res => {
            setCars(res.data)
            console.log(res.data)
          })
          .catch(err => console.log(err))
    }, [search])
  return (
    <div>
        <CarList cars={cars} setCars={setCars}/>
    </div>
  )
}

export default Search
