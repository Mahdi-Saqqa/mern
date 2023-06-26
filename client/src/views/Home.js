import React, { useEffect,useState } from 'react'
import axios from 'axios'
const Home = () => {
    const [car, setCar] = useState([])
    const [loaded, setLoaded] = useState(false)
    const getCar =() => {
        axios.get('http://localhost:8000/api/cars/random')

            .then(res => {
                setCar(res.data)
                console.log(res.data)
                console.log(car)
            })
            .catch(err => console.log(err))
    }
    const likeCar = () => {
        axios.put('http://localhost:8000/api/cars/like/' + car._id)
            .then(res => {
                getCar()
            })
            .catch(err => console.log(err))
    }

    useEffect(
        () =>{
            getCar()
            setLoaded(true)
        }
        , [])


  return (
        <div className="d-flex mt-5 text-center w-100 justify-content-center">
            {
                (loaded && car)?
                <div className="col-6 text-center">
                <img src={car.imgUrl} alt={car.name} style={{width:"100%"}}/>
                <h2 className='my-3'>Do you Like this car?</h2>
                <div className="d-flex gap-3 justify-content-evenly">
                <button onClick={likeCar} className="btn btn-primary">Yes</button>
                <button onClick={getCar} className="btn btn-danger">No</button>
                </div>
            </div>:
            <p>No cars yet</p>
            }
        </div>
  )
}

export default Home