import React from 'react'
import DeleteButton from './DeleteButton'
import {Link} from 'react-router-dom'

const CarCard = (props) => {
    const {successDelete} = props;
  return (
    <div className='card col-3 m-5 p-0'>
        <img src={props.car.imgUrl} alt={props.car.name} />
        <h3>{props.car.name}</h3>
        <p>Likes: {props.car.likes}</p>
        <DeleteButton carId={props.car._id} successDelete={(id)=>successDelete(id)}/>
        <Link to={`/detail/${props.car._id}`} className="btn btn-primary mt-3">datails</Link>
    </div>
  )
}

export default CarCard