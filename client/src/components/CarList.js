import React from 'react'
import CarCard from './CarCard'


const CarList = (props) => {
    const removeFromDom = (carId) => {
      console.log('deletefrom dom')
        props.setCars(props.cars.filter(car => car._id !== carId))
    }
  return (
    <div className='row'>
         {        
         props.cars.map((car, idx) => {
            return <CarCard car={car} key={idx} successDelete={removeFromDom}/>
        })}
    </div>
  )
}

export default CarList