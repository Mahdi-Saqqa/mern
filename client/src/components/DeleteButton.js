import React from 'react'
import axios from 'axios'

const DeleteButton = (prop) => {
    const {carId, successDelete} = prop;
    const deleteCar = e => {
        axios.delete('http://localhost:8000/api/cars/' + carId)
            .then(res=>{
                successDelete(carId);
            })
            .catch(err => console.log(err))
    }

  return (
    <button  className="btn btn-danger"
        onClick={deleteCar}
    >
        Delete
    </button>
  )
}

export default DeleteButton